const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// loading routes
const indexRoute = require('./routes/index-route');
const produtRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/produts', produtRoute);
module.exports = app;