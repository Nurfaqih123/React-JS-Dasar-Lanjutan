import { Link } from "react-router-dom";
function App() {

  return (
    <>
       <div className="container">
        {/*Header*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm mb-4">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fa-solid fa-mountain-sun fa-xl me-2" style={{ color: "#309132" }}></i>
          <span className="fw-bold fs-4">Go Travel</span>
        </Link>

        {/* Tombol Toggle untuk Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Ikon Media Sosial */}
          <div className="d-flex align-items-center">
            <a href="https://www.instagram.com/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/@namachannel" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube fa-lg"></i>
            </a>
          </div>

          {/* Tombol Autentikasi */}
          <div className="d-flex ms-3">
            <button className="btn btn-outline-primary me-2">Masuk</button>
            <button className="btn btn-primary">Daftar</button>
          </div>
        </div>
      </div>
    </nav>


    {/*Hero*/}
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Go Travel–Jelajahi Keajaiban Nusantara</h1>
        <p className="lead">Go Travel hadir untuk mengantarkan Anda menjelajahi pesona negeri seribu pulau. Dari pantai tropis di Bali hingga budaya unik di Yogyakarta, dari kekayaan bawah laut Raja Ampat hingga pesona alam pegunungan di Sumatera dan Sulawesi – setiap perjalanan bersama kami adalah cerita tak terlupakan.
          Kami menawarkan paket wisata yang dirancang khusus sesuai minat Anda – mulai dari petualangan alam, eksplorasi budaya, kuliner autentik, hingga relaksasi di surga tropis. Didampingi oleh pemandu berpengalaman dan pelayanan profesional, Go Travel siap memberikan pengalaman liburan terbaik dengan sentuhan lokal yang hangat..</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Read Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://picsum.photos/710/640" alt="" width="720"/>
      </div>
    </div>


    {/*Product List*/}
    <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Best Selling Travel </h1>
        <p className="lead text-body-secondary">Didampingi oleh pemandu berpengalaman dan pelayanan profesional, Go Travel siap memberikan pengalaman liburan terbaik dengan sentuhan lokal yang hangat...</p>
        <p>
          <a href="#" className="btn btn-primary my-2 m-2">Views</a>
          <a href="#" className="btn btn-secondary my-2">Other Travel</a>
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Paket Travel Kami</h2>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {/* Card 1-9 */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div className="col" key={item}>
          <div className="card shadow-sm h-100">
            <img 
              src={`https://picsum.photos/300/200?travel=${item}`} 
              className="card-img-top"
              alt={`Travel ${item}`}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Travel {item}</h5>
              <p className="card-text">
                {[
                  "Tour Bali 7 Hari",
                  "Liburan ke NTT",
                  "Petualangan Pulau Seribu",
                  "Wisata Yogyakarta",
                  "Explore Tanah Jawa",
                  "Tur Sejarah Indonesia",
                  "Rinjani Explore",
                  "Bromo Family Trip",
                  "Pantai Selatan"
                ][item-1]}
              </p>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-primary">Pesan Sekarang</button>
                <small className="text-muted">
                  {["⭐ 4.9", "⭐ 4.7", "⭐ 5.0", "⭐ 4.8", "⭐ 4.5", "⭐ 4.9", "⭐ 5.0", "⭐ 4.6", "⭐ 4.7"][item-1]}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  {/* Footer */}
<div className="b-example-divider"></div>

<footer className="bg-light text-muted pt-4 border-top">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      {/* Kiri: Logo & Nama */}
      <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
        <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
          <i className="fa-solid fa-mountain-sun fa-xl me-2" style={{ color: "#309132" }}></i>
          <span className="fw-bold fs-5">Go Travel</span>
        </Link>
        <span className="ms-3 text-secondary">&copy; 2025 NF Academy</span>
      </div>

      {/* Kanan: Ikon Sosial Media */}
      <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
        <a href="https://www.instagram.com/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a href="https://www.facebook.com/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/namaprofil" className="text-muted me-3" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="https://www.youtube.com/@namachannel" className="text-muted" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube fa-xl"></i>
        </a>
      </div>
    </div>

    {/* Garis pemisah */}
    <hr className="my-4" />

    {/* Footer Menu Opsional */}
    <div className="row justify-content-center text-center">
      <div className="col-auto">
        <p className="text-muted small">Made with ❤️ by Go Travel Team | Explore your journey</p>
      </div>
    </div>
  </div>
</footer>







  </div>
  </div>
      
    </>
  )
}

export default App
