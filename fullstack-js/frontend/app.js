require('./styles/app.css')
//import './styles/app.css' //ecmascript 6
import UI from './UI'
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.renderBooks();
})

document.getElementById('book-form')
    .addEventListener('submit', function(e){
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('image', image[0]);
        
     

        ui.renderMessage('New book added', 'success', 3000);
        ui.addANewBook(formData);
    });

document.getElementById('books-cards')
    .addEventListener('click', function(e){
        if(e.target.classList.contains('delete')){
            const idBook = e.target.getAttribute('_id')
            ui.deleteBook(idBook);
            ui.renderMessage(`Book deleted`, 'danger', 3000);
        }
        e.preventDefault();
    });
