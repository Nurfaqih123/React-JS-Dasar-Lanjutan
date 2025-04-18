import { useState } from "react";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random(),
      title,
      author,
      year: new Date().getFullYear(),
      description: "Buku baru yang ditambahkan oleh user.",
      image: "https://via.placeholder.com/150x200?text=Buku+Baru"
    };
    onAdd(newBook);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Tambah Buku</button>
    </form>
  );
}

export default BookForm;