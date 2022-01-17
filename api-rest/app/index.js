const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 5000;

// setting
app.set('port', process.env.PORT || PORT);

// middleware
app.use(morgan('dev'));

// routes
app.use(require('./routes/index'));

// start server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
