/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 7856;

app.use(express.static(__dirname + '/views'));

app.listen(port);

console.log('server running on port ' + port);