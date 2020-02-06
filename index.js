const express = require('express');

const app = express();


const zomato = require('zomato-api');
const client = zomato({
    userKey: '52bbeae11be3015ad67a79fd98086d52'
});

client.getCities({q: 'vancouver'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

app.get('/',(req,res)=> {
    res.send({hi:'there'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);