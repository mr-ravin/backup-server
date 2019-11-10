var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var express = require("express");
var app = express();
app.use(express.static('public/images/'));

app.get('/', function(req, res){
  console.log('connected');
  res.sendFile(__dirname + '/upload.html')
});

app.post('/fileupload', function(req, res){
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
        file.path = __dirname + '/data/' + file.name
    });
    res.write("File Uploaded");
    res.end();
});


app.listen(3000, (req,res) => {
  console.log("listening on 3000");
});

