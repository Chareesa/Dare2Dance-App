var express = require('express');
var app = express();
var port = process.env.PORT || 7856;

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/audio'));

app.listen(port);

console.log('server running on port ' + port);