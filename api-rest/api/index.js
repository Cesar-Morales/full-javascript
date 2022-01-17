const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 3000;

// setting
app.set('port', process.env.PORT || PORT);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api/people',require('./routes/people'));


// start server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
