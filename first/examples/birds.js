/*
Example of the express.Router class
This is used to create mountable and modular route handlers
*/

var express = require('express')
var router = express.Router()

router.use(function(req, res, next){
  console.log('Birds Middleware')
  next()
})

//Define a home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})

//define the about router
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router;
