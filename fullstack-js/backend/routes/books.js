const { Router } = require('express'); //Solo requiro routers porque no quiero levantar otro sv
const router = Router();    

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books =  await Book.find();
    res.json(books); 
});

module.exports = router;