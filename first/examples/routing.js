//This is an Intro to basic routing with Node.js/Express
// Sources: https://expressjs.com/en/guide/routing.html

var express = require('express')
var app = express()

//Midleware, Executes whenever the app recieves a request
app.use(function(req, resp, next){
  console.log('Middleware Log\n Path: "/"')
  next();
})

//Basic GET request
app.get('/', function(req,resp){
  resp.send(' GET Root')
})

//Basic POST request
app.post('/', function(req, resp){
  resp.send('POST Root')
})

//Extra Test Path w/ GET request
app.get('/test', function(req, resp){
  resp.send('GET "/test"')
})

//Route Path using Regex
app.get(/.*fly$/, function(req,resp){
  resp.send('GET /.*fly$/')
})

//Route to test Json Return
app.get('/jsonTest', function(req, resp){
  resp.json({id : 1, message : 'Hello Worlld'})
})

//route to test JSONP
app.get('/jsonPtest', function(req, resp){
  resp.jsonp({id : 1, message : 'Hello World'})
})

//Callback Function 1
var cbfunc1 = function(req, resp, next){
  console.log('cb0')
  next()
}

//Callback Function 2
var cbfunc2 = function(req, resp, next){
  console.log('cb1')
  next()
}

//Array of Callback Functions TestPath
app.get('/callbackfunc', [cbfunc1, cbfunc2], function(req, resp, next){
  console.log('Response will be send by next function...')
  next()
}, function (req, resp){
  resp.send('Hello from D!')
})

app.listen(1337, function(){
    console.log('App listening on port 1337!')
});
