//Simple Hello world application, simplest way to create an app

const express = require('express')
const app = express()
var tools = require('./testStatic.js')//Allow to use other files
app.use(express.static('examples'))

app.get('/', (req, res) => res.send('Got a GET request'))

app.post('/', (req, res) => res.send('Got a POST request'))

app.put('/user', (req, res) => res.send('Got a PUT request at /user'))

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))

//Utilize function form other file
app.get('/static', (req,resp) =>{
  resp.send(' GET Static')
  tools.displayStr('Hello There Bud!')
})

app.listen(1337, () => console.log('Example app listening on port 1337!'))
