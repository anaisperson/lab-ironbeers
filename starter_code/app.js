
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


// Home
app.get('/', (req, res, next) => {
  res.render('index');
});


// Beers
app.get('/beers', (req, res, next) => {
  res.render('beers');
});


//Random Beers
app.get('/randombeer', (req, res, next) => {
  res.render('randombeer');
});


app.listen(3000);
