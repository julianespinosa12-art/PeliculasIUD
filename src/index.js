
// server-express.js
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express() // initialize app
const port = 9000

// GET callback function returns a response message
app.get('/', (req, res) => {
res.send('Pepe el pollo')
})

//mongodb conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoAtlas conected'))
    .catch(err => console.error(error));


app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})