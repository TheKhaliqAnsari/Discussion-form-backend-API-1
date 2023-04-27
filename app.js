const express = require('express');
const app = express();
const morgan = require('morgan');
const userRoute = require('./routes/user.route');


app.use(morgan('dev'));


app.use('/user', userRoute);

module.exports = app