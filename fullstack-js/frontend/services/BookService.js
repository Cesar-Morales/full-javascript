// Servicio = Clase con metodos que podes usar en toda la app

class BookService {

    constructor() {
        this.URI = 'http://localhost:3000/api/books';
    }

    getBooks() {
        return fetch(this.URI)
            .then(res => res.json())
            .catch(err => console.log(err));
    }
    
    postBook(book) {
        return fetch(this.URI, {
            method: 'POST',
            body: book,
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    deleteBook(id) {
        console.log(id);
        return fetch(`${this.URI}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

}

export default BookService;