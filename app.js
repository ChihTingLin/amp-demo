var express = require("express");
var app = express()

app.use('/', express.static('src'));

app.listen(3001, function() {
    console.log('Server listening on 3001...')
});

