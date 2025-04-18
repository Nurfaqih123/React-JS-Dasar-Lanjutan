import { useState, useEffect } from "react";
import booksData from "../Utils/books";
import BookForm from "../components/BookForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulasi loading data dari backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks(booksData);
      setLoading(false);
    }, 1500); // Simulasi delay 1.5 detik

    return () => clearTimeout(timer);
  }, []);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const Spinner = () => (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      <div className="lds-dual-ring"></div>
      <p>Memuat data buku...</p>
    </div>
  );

  return (
    <>
      <Header />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px"
        }}>📚 Book List</h2>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <div style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              marginBottom: "40px"
            }}>
              <BookForm onAdd={addBook} />
            </div>

            <div className="book-list" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {books.map((book) => (
                <div key={book.id} className="book-card" style={{
                  background: "#ffffff",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "10px"
                    }}
                  />
                  <h3 style={{ margin: "10px 0", fontSize: "18px" }}>{book.title}</h3>
                  <p><strong>Penulis:</strong> {book.author}</p>
                  <p><strong>Tahun:</strong> {book.year}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;