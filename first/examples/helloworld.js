//Simple Hello world application, simplest way to create an app

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(1337, () => console.log('Example app listening on port 3000!'))
