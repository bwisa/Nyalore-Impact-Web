const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const path = require('path');

//local host
const port = 4000;

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './public/img')));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// get the index page
app.get('/', function(req, res) {  
  res.render('index');
});

// get the about us page
app.get('/careers', function(req, res){
  res.render('careers')
})

// get the servcies page
app.get('/services', function(req, res){
  res.render('services')
})

// get the contact us page
app.get('/contact', function(req, res){
 res.render('contact')
})

// get the projects page
app.get('/projects', function(req, res){
  res.render('projects')
})

app.get('/partners', function(req, res){
  res.render('partners')
})

app.get('/csr', function(req, res){
  res.render('csr')
})

app.get('/impact', function(req, res){
  res.render('impact')
})

// run the server
app.listen(port, () => {
  console.log('Nyalore Impact Limited Server is listening at port 4000')
})