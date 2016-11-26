var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', (req, res) => {
        let books;
        const file = process.argv[3];
        fs.readFile(file, (e, data) => {
        books = JSON.parse(data);
        res.json(books);
        })
});


app.listen(process.argv[2]);
