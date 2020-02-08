const axios= require('axios');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const likes = mongoose.model('Restaurant_Likes');

const configData = {
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/cities',
    headers: {'Content-Type': 'application/json', 'user-key': keys.userKey},
    params: {}
};

module.exports = app => {

    app.get('/api/cities', async (req, res) => {
        const temp = configData;
        temp.params= {'q':'san jose','count':'10'};
        const data = await axios.request(configData);

         //const data = await likes.find({name:"Rest"});
        console.log("CITIES");
        console.log(data.data);
        //console.log(data.data);
        return res.send(data.data.location_suggestions);

    });


    app.post('/api/test', async (req, res) => {
        console.log(req.body);



        //const data = await likes.find({name: "test"});
        console.log("TEST");
        console.log(data);
        res.send(data);


    });

    app.post('/api/search', async (req, res) => {

        const data = await client.search({
            entity_id: 10883,
            entity_type: 'city',
            establishment_type: 'Bakery',
            count: 10
        });
        console.log("SEARCH");
        console.log(data);
        res.send(data);

    });


    app.post('/api/post', (req, res) => {
        res.send("post")
    });

};


