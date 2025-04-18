import { Link, useLocation } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        padding: "20px 0",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaBookOpen size={30} />
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: "600" }}>
            BookSales App
          </h1>
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/"
            style={{
              color: isActive("/") ? "#ffeb3b" : "#ffffff",
              textDecoration: "none",
              fontWeight: isActive("/") ? "bold" : "normal",
              transition: "color 0.3s",
            }}
          >
            Home
          </Link>
          <Link
            to="/book"
            style={{
              color: isActive("/book") ? "#ffeb3b" : "#ffffff",
              textDecoration: "none",
              fontWeight: isActive("/book") ? "bold" : "normal",
              transition: "color 0.3s",
            }}
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;