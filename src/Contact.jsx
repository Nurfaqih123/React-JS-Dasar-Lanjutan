function Contact() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">Hubungi Kami</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Masukkan email Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;