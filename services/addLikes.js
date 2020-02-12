const mongoose = require('mongoose');
const model = mongoose.model('Restaurant_Likes');

module.exports = app => {

    app.post('/api/addLikes',async(req,res)=> {

         console.log("firstbody   " + req.body);
            const data = await model.findOne({res_id: req.body.res_id});
            console.log(data);
             if (data) {
                 console.log("existed data " );
                 console.log(req.body);
                 if (typeof req.body.res_likes== "string" ) {

                     data.res_likes +=(req.body.res_likes);
                 }
                 data.res_likes +=(req.body.res_likes);
                 data.save();
             } else {
                 new model(req.body).save();
             }
        res.send("ok");
    });
}
