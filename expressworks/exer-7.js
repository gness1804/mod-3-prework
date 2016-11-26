var express = require('express');
var app = express();

app.get('/search', (req, res) => {
        const extract = req.query;
        res.send(extract);
});


app.listen(process.argv[2]);
