const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser());

app.get('/catalogData', (req, res) => {
    fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

app.get('/cartData', (err, res) =>{
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log('Server started on 3000 port!')
})
