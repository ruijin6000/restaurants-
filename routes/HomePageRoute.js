const zomato = require('zomato-api');
const keys = require('../config/keys');

const client = zomato({
    userKey: keys.userKey
});



module.exports = app => {

    // app.get('/api/test2',  (req,res) => {
    //
    //    const data= client.getCities({q: 'san jose',count:1})
    //          .then(res => { console.log(res); })
    //           .catch(err => console.log(err));
    //
    //     console.log(data);
    //     console.log("hahaha");
    //     console.log(data.location_suggestions[1].name);
    //     const temp = data.location_suggestions[1].name;
    //     return res.status(201).send(temp.toString());
    //     return res.status(401).send({error:'You must log in !'});
    //
    // });


    app.get('/api/cities', async (req,res) => {
        // console.log(req);
        const data = await client.getCities({q: 'san jose',count:5});

        const temp = data.location_suggestions;
        console.log(temp[0]);
        res.status(200).send(temp[0].name);
    });


    app.get('/api/test', async (req,res) => {
        const data = await client.getEstablishments({city_id: 256,count:5});
        const temp = data;
        console.log(temp.establishments[0]);
         res.status(200).send(temp.establishments);
    });

    app.get('/api/search', async (req,res) => {

        const data = await client.search({entity_id:10883,entity_type:'city',establishment_type: 'Bakery',count:10})
            .catch("ERROR: REJECT");
        const temp = data;
        res.status(200).send(temp);
    });

};


