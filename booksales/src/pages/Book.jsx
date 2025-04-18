import { useState, useEffect } from "react";
import books from "../Utils/books";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Book() {
  const [loading, setLoading] = useState(true);

  // Simulate loading data from a backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate data load completion after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const Spinner = () => (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      <div className="lds-dual-ring"></div>
      <p>Memuat data buku...</p>
    </div>
  );

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>📚Book Details</h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="book-list">
            {books.map((book) => (
              <div className="book-card" key={book.id}>
                <img src={book.image} alt={book.title} />
                <div>
                  <h3 style={{ marginBottom: "5px" }}>{book.title}</h3>
                  <p><strong>Penulis:</strong> {book.author}</p>
                  <p><strong>Tahun:</strong> {book.year}</p>
                  <p>{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Book;