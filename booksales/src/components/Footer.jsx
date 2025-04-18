function Footer() {
    return (
      <footer
        style={{
          background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
          color: "#fff",
          padding: "30px 20px",
          marginTop: "60px",
          textAlign: "center",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}
      >
        <p style={{ fontSize: "16px", marginBottom: "8px" }}>
          📚 <strong>BookSales Project</strong> — Made with  by M Nurfaqih Pratama
        </p>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          © {new Date().getFullYear()} | NF ACADEMY | All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;