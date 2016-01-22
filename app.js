'use strict';

var PORT = 4000;

// bring in dependencies / libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

// configure general middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// route definitions
app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.get('/tuesday', function(req, res) {
  console.log('tues get');
  fs.readFile('./tuesday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    res.send(arr);
  });
});

app.post('/tuesday', function(req, res) {
  fs.readFile('./tuesday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var name = req.body.name;
    arr.push(name);
    fs.writeFile('./tuesday.json', JSON.stringify(arr), function(err) {
      if(err) return res.status(400).send(err);
      res.send();
    });
  });
});
app.get('/wednesday', function(req, res) {
  fs.readFile('./wednesday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    res.send(arr);
  });
});

app.post('/wednesday', function(req, res) {
  fs.readFile('./wednesday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var name = req.body.name;
    arr.push(name);
    fs.writeFile('./wednesday.json', JSON.stringify(arr), function(err) {
      if(err) return res.status(400).send(err);
      res.send();
    });
  });
});
app.get('/thursday', function(req, res) {
  fs.readFile('./thursday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    res.send(arr);
  });
});

app.post('/thursday', function(req, res) {
  fs.readFile('./thursday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var name = req.body.name;
    arr.push(name);
    fs.writeFile('./thursday.json', JSON.stringify(arr), function(err) {
      if(err) return res.status(400).send(err);
      res.send();
    });
  });
});
app.get('/friday', function(req, res) {
  fs.readFile('./friday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    res.send(arr);
  });
});

app.post('/friday', function(req, res) {
  fs.readFile('./friday.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var name = req.body.name;
    arr.push(name);
    fs.writeFile('./friday.json', JSON.stringify(arr), function(err) {
      if(err) return res.status(400).send(err);
      res.send();
    });
  });
});




// spin up server
app.listen(PORT, function() {
  console.log('Express server listening on port', PORT)
});
