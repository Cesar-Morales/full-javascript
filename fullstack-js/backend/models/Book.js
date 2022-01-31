const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true},
    imagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

model.exports = model('Book', BookSchema);