const { Router } = require('express'); //Solo requiro routers porque no quiero levantar otro sv
const router = Router();    

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books =  await Book.find();
    res.json(books); 
});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
    const newBook = new Book({title, author,isbn});
    await newBook.save();
    console.log(newBook);
    res.json({ message: "Book recived" });
});

router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    const bookdeleted = await Book.findByIdAndDelete({_id});
    res.json({  message: "Book deleted", 
                Book : {
                    title: bookdeleted.title,
                    author: bookdeleted.author,
                    isbn: bookdeleted.isbn
                }
            } );
});

module.exports = router;