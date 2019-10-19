const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hello world from express.js');
});

app.get(
  '/user',

  function(req, res, next) {
    // logger middleware
    console.log(req.url);
    next();
  },

  function(req, res, next) {
    // auth middleware
    req.user = req.query.name;
    next();
  },

  function(req, res, next) {
    // guard middleware
    req.user ? next() : next('forbidden');
  },

  function(req, res) {
    // request handler
    res.send('Hi ' + req.user + ' !!!!');
  },

  function(err, req, res, next) {
    // error handler
    res.json({ status: 500, err });
  },
);

app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
