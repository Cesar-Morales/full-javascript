const { Router } = require('express'); //Solo requiro routers porque no quiero levantar otro sv
const router = Router();    
const { unlink } = require('fs-extra');
const Book = require('../models/Book');
const path = require('path');

router.get('/', async (req, res) => {
    const books =  await Book.find();
    res.json(books); 
});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
    const imagePath = '/uploads/'+req.file.filename;
    const newBook = new Book({title, author,isbn, imagePath});
    await newBook.save();
    console.log(newBook);
    res.json({ message: "Book recived" });
});

router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    const bookdeleted = await Book.findByIdAndDelete({_id});
    unlink(path.resolve('./backend/public'+bookdeleted.imagePath));
    res.json({  message: "Book deleted", 
                Book : {
                    title: bookdeleted.title,
                    author: bookdeleted.author,
                    isbn: bookdeleted.isbn
                }
            } );
});

module.exports = router;