/*
This code uses Quotes JSON file from - https://github.com/JamesFT/Database-Quotes-JSON
*/
const express = require('express');
const random = require('random');
const data = require('./quotes.json');

var app = express();

var port = process.env.PORT || 80;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'API is up and running. Quotes Db contains ' + data.length + ' entries' });
});

router.get('/quotes', function (req, res) {
    const randomNumber = random.int((min = 0), (max = data.length));
    const randomQuote = data[randomNumber];
    console.log('Random Number :' + randomNumber + ' - and associated quote: ' + JSON.stringify(randomQuote));
    res.json({ quote: randomQuote });
});

app.use('/api', router);

app.listen(port);

console.log('API running on port ' + port);