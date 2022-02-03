require('./styles/app.css')
//import './styles/app.css' //ecmascript 6
//const BookService = require('./services/BookService')
import BookService from './services/BookService'; //ecmascript 6

document.getElementById('book-form')
        .addEventListener('submit', function(e){
            e.preventDefault();
            var form = new FormData(this);
            

            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
            const image = document.getElementById('image').files;
            
            const formData = new FormData();
            formData.append('title', title);
            formData.append('author', author);
            formData.append('isbn', isbn);
            formData.append('image', image[0]);
            
            const bookService = new BookService();
            bookService.postBook(formData);
            
        });

