import  API  from "../_api"

export const getBooks = async () => {
    const { data } = await API.get("/books")
    return data.data

}

export const createBook = async (data) => {
    try {
        const response = await API.post("/books", data)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
        
        
    }
}

export const showBook = async (id) => {
    try {
        const { data } = await API.get(`/books/${id}`)
        return data.data
    }   catch (eror) {
        console.log(eror);
        throw eror
    }
}

export const updateBook = async (id, data) => {
    try {
        const response = await API.post(`/books/${id}`, data)
        return response.data
    }   catch (eror) {
        console.log(eror);
        throw eror
    }
}

export const deleteBook = async (id) => {
    try {
        await API.delete(`/books/${id}`)
    }   catch (eror) {
        console.log(eror);
        throw eror
    }
}

export const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    price: 50000,
    cover_photo: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
  },
  {
    id: 2,
    title: "The Shining",
    price: 25000,
    cover_photo: "https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg"
  },
  {
    id: 3,
    title: "Laskar Pelangi",
    price: 40000,
    cover_photo: "https://upload.wikimedia.org/wikipedia/id/0/0e/Laskar_Pelangi_sampul.jpg"
  }
];
