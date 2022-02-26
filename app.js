const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');
const res = require('express/lib/response');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use(professionalRoutes);

app.use(bodyParser.json());

app.listen(8080);