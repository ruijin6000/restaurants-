const axios = require('axios');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const likes = mongoose.model('Restaurant_Likes');


const configData = {
    method: 'get',
    url: {},
    headers: {'Content-Type': 'application/json', 'user-key': keys.userKey},
    params: {}
};

module.exports = app => {

    app.get('/api/test', (req, res) => {
        //console.log(req.get('Cookie'));
        console.log(req.cookies['connect.sid']);
        res.send("test");
    });

    /**  CITIES **/
    app.post('/api/cities', async (req, res) => {
        if (req.body.city_name == undefined) {
            res.redirect('/');}
        req.session.existUser = true;
        configData.url = 'https://developers.zomato.com/api/v2.1/cities';
        configData.params = {q: req.body.city_name, count: 5};
        try {
            const data = await axios.request(configData);
            const copy = [];
            //const data = await likes.find({name:"Rest"});
            for (let i = 0; i < data.data.location_suggestions.length; i++) {
                const item = {
                    city_id: data.data.location_suggestions[i].id,
                    city_name: data.data.location_suggestions[i].name
                };
                copy.push(item);
            }
            res.status(200).send(copy);
        } catch (e) {
            res.status(404);
            console.log(e);
        }

    });


    /**  Establishment **/
    app.post('/api/establishments', async (req, res) => {
        if (req.body.city_id == undefined) {
            res.redirect('/');
        }

        configData.url = 'https://developers.zomato.com/api/v2.1/establishments';
        configData.params = {city_id: req.body.city_id};
        try {
            const data = await axios.request(configData);
            //const data = await likes.find({name: "test"});
            const copy = [];
            for (let i = 0; i < 10 && i < data.data.establishments.length; i++) {
                const item = {
                    establishment_id: data.data.establishments[i].establishment.id,
                    establishment_name: data.data.establishments[i].establishment.name,
                };
                copy.push(item);
            }
            res.status(200).send(copy);
        } catch (e) {
            res.status(404);
            console.log(e);
        }
    });


    /**  Search Restaurants **/
    app.post('/api/search', async (req, res) => {
        if (req.body.city_id == undefined || req.body.establishment_id == undefined) {
            res.redirect('/');
        }
        configData.url = 'https://developers.zomato.com/api/v2.1/search';
        configData.params = {
            entity_id: req.body.city_id,
            entity_type: 'city',
            establishment_type: req.body.establishment_id,
            count: 20
        };
        try {
            const data = await axios.request(configData);
            //const data = await likes.find({name: "test"});
            const buffer = data.data.restaurants;
            const copy = [];
            for (let i = 0; i < buffer.length; i++) {
                const item = {
                    res_id: buffer[i].restaurant.id,
                    res_name: buffer[i].restaurant.name,
                    address: buffer[i].restaurant.location.address,
                    cuisines: buffer[i].restaurant.cuisines
                };
                copy.push(item);
            }
            res.status(200).send(copy);
        } catch (e) {
            res.status(404);
            console.log(e);
        }
    });


};


