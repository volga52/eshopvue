const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            // cart.push(item);
            const indexProduct = cart.findIndex((elem) => elem.product_name === item.product_name);

            if (indexProduct !== -1) {
                cart[indexProduct].quantity += 1;
            } else {
                item.quantity = 1;
                cart.push(item);
            }

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    })
})

app.post('/removeFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            
            // Полное удаление из корзины по 'команде'
            if (item.clear === 'yes') {
                cart.splice(0, cart.length);
            } else {

                const indexProduct = cart.findIndex((elem) => elem.product_name === item.product_name);
                // const indexProduct = cart.findIndex((elem) => elem.id_product === item.id_product);

                if ((cart[indexProduct].quantity -= 1) === 0) {
                    cart.splice(indexProduct, 1);
                }
            }

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    })
})

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
