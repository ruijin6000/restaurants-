const zomato = require('zomato-api');
const keys = require('../config/keys');

const client = zomato({
    userKey: keys.userKey
});



module.exports = app => {
    app.get('/',(req,res)=> {
        res.send({hi:'there'});
    });
}


client.getCities({q: 'san jose'})
    .then(res => console.log(res))
    .catch(err => console.log(err));