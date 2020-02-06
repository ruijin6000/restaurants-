const express = require('express');
const zomato = require('zomato-api');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/restaurant_likes');
mongoose.connect(keys.mongoURI);

const app = express();




const client = zomato({
    userKey: keys.userKey
});

client.getCities({q: 'san jose'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

app.get('/',(req,res)=> {
    res.send({hi:'there'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);