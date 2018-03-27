//Simple Hello world application, simplest way to create an app

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send('Got a POST request'))

app.put('/user', (req, res) => res.send('Got a PUT request at /user'))

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))

app.listen(1337, () => console.log('Example app listening on port 3000!'))
