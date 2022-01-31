const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path'); 

// Initialize the app
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single());

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});