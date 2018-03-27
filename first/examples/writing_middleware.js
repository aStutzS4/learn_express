//Intro to Writing Middleware using Express Apps
//Sources: https://expressjs.com/en/guide/writing-middleware.html

const express = require('express')
const app = express()

//Log's when a request is made.. intended for the base route
var myLogger = function(req, res, next){
  console.log('Logged')
  next()
}

//
var requestTime = function(req, res, next){
  req.requestTime = Date.now()
  next()
}

//app.use(myLogger)
app.use(requestTime)//Loads the specified function before the route for the root path

/*
Explanation of middleware Function
  get - HTTP Method for which middleware function applies
  '/' - Route for which the function applies
  req - HTTP request argument
  res - HTTP response argument
  next - Callback argument to middleware function
*/
app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(1337, () => console.log('writing_middleware app listening on port 1337'))
