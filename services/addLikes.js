const mongoose = require('mongoose');
const model = mongoose.model('Restaurant_Likes');

module.exports = app => {

    app.post('/api/addLikes', async (req, res) => {
        if (req.body.res_id === undefined) {
            return res.status(404).send("invalid request data");
        }

        const data = await model.findOne({res_id: req.body.res_id});
        if (data) {
            data.res_likes += (req.body.res_likes);
            data.save();
        } else {
            new model(req.body).save();
        }
        res.status(200).send("ok");
    });


    app.get('/api/db', async (req, res) => {
        const data = await model.find();
        console.log(data);
        if (data) {
            return res.send(data);
        } else {
            return res.status(404).send("Data Base is Empty");
        }
    });
};
