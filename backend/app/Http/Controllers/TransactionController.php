<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     * Only accessible by admin
     */
    public function index()
    {
        try {
            $transactions = Transaction::with(['user', 'book'])
                ->orderBy('created_at', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Transactions retrieved successfully',
                'data' => $transactions
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve transactions',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     * Only accessible by authenticated customer
     */
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1',
            'notes' => 'nullable|string|max:1000'
        ]);

        try {
            DB::beginTransaction();

            $book = Book::find($request->book_id);
            
            // Check stock availability
            if ($book->stock < $request->quantity) {
                return response()->json([
                    'success' => false,
                    'message' => 'Insufficient stock available'
                ], 400);
            }

            // Calculate prices
            $unitPrice = $book->price;
            $totalPrice = $unitPrice * $request->quantity;

            // Create transaction
            $transaction = Transaction::create([
                'user_id' => Auth::id(),
                'book_id' => $request->book_id,
                'quantity' => $request->quantity,
                'unit_price' => $unitPrice,
                'total_price' => $totalPrice,
                'status' => 'pending',
                'notes' => $request->notes,
                'transaction_date' => now()
            ]);

            // Decrease book stock
            $book->decreaseStock($request->quantity);

            DB::commit();

            // Load relationships
            $transaction->load(['user', 'book']);

            return response()->json([
                'success' => true,
                'message' => 'Transaction created successfully',
                'data' => $transaction
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Failed to create transaction',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     * Only accessible by authenticated customer (own transaction)
     */
    public function show($id)
    {
        try {
            $transaction = Transaction::with(['user', 'book'])->find($id);

            if (!$transaction) {
                return response()->json([
                    'success' => false,
                    'message' => 'Transaction not found'
                ], 404);
            }

            // Check if user owns this transaction
            if ($transaction->user_id !== Auth::id()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized access to this transaction'
                ], 403);
            }

            return response()->json([
                'success' => true,
                'message' => 'Transaction retrieved successfully',
                'data' => $transaction
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve transaction',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     * Only accessible by authenticated customer (own transaction)
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'sometimes|integer|min:1',
            'status' => 'sometimes|in:pending,completed,cancelled',
            'notes' => 'nullable|string|max:1000'
        ]);

        try {
            DB::beginTransaction();

            $transaction = Transaction::find($id);

            if (!$transaction) {
                return response()->json([
                    'success' => false,
                    'message' => 'Transaction not found'
                ], 404);
            }

            // Check if user owns this transaction
            if ($transaction->user_id !== Auth::id()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized access to this transaction'
                ], 403);
            }

            // Only allow updates if transaction is still pending
            if ($transaction->status !== 'pending') {
                return response()->json([
                    'success' => false,
                    'message' => 'Can only update pending transactions'
                ], 400);
            }

            $oldQuantity = $transaction->quantity;
            $book = $transaction->book;

            // If quantity is being updated
            if ($request->has('quantity') && $request->quantity != $oldQuantity) {
                $quantityDiff = $request->quantity - $oldQuantity;
                
                // Check stock if increasing quantity
                if ($quantityDiff > 0 && $book->stock < $quantityDiff) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Insufficient stock for quantity increase'
                    ], 400);
                }

                // Update stock
                if ($quantityDiff > 0) {
                    $book->decrement('stock', $quantityDiff);
                } else {
                    $book->increment('stock', abs($quantityDiff));
                }

                // Recalculate total price
                $transaction->quantity = $request->quantity;
                $transaction->total_price = $transaction->unit_price * $request->quantity;
            }

            // Update other fields
            if ($request->has('status')) {
                $transaction->status = $request->status;
            }

            if ($request->has('notes')) {
                $transaction->notes = $request->notes;
            }

            $transaction->save();

            DB::commit();

            // Load relationships
            $transaction->load(['user', 'book']);

            return response()->json([
                'success' => true,
                'message' => 'Transaction updated successfully',
                'data' => $transaction
            ], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Failed to update transaction',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     * Only accessible by admin
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();

            $transaction = Transaction::find($id);

            if (!$transaction) {
                return response()->json([
                    'success' => false,
                    'message' => 'Transaction not found'
                ], 404);
            }

            // Restore book stock if transaction was pending
            if ($transaction->status === 'pending') {
                $book = $transaction->book;
                $book->increment('stock', $transaction->quantity);
            }

            $transaction->delete();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Transaction deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete transaction',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get user's own transactions
     */
    public function myTransactions()
    {
        try {
            $transactions = Transaction::with(['book'])
                ->where('user_id', Auth::id())
                ->orderBy('created_at', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'User transactions retrieved successfully',
                'data' => $transactions
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve user transactions',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}