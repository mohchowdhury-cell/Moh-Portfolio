
var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Moh Chowdhury' });
});

// About Me page route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me | Moh Chowdhury' });
});

// Projects page route
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects | Moh Chowdhury' });
});

// Contact Me page route
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me | Moh Chowdhury' });
});

module.exports = router;
