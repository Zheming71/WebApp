/*
  file: index.js
  name: Zheming Gu
  Student ID: 301243997
  date: Oct 2,2022
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('proj', { name: 'g123' , title: 'products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});


router.get("/listDemo",function(req,res,next){
  res.render('index', { title: 'listDemo' });
})
router.get("/pdf",function(req,res,next){
  res.render('index', { title: 'pdf' });
})
router.get("/proj",function(req,res,next){
  res.render('proj.ejs', { name: 'g123' , title: 'products' });
})

module.exports = router;
