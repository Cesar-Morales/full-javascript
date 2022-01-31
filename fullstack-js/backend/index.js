const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path'); 

// Initialize the app
const app = express();
require('./database');

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
app.use(multer({storage}).single()); // single() para que solo se pueda subir un archivo a la vez
app.use(express.urlencoded({extended: false}));  // Puedo entender los datos de los formularios que me envien
app.use(express.json()); //  Puedo entender las peticiones ajax que me envien al servidor

// Routes
app.use('/api/books',require('./routes/books'));

//Static files
app.use(express.static(path.join(__dirname, 'public'))); //acceso a archivos estaticos

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});