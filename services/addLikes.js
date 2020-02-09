const mongoose = require('mongoose');

const model = mongoose.model('Restaurant_Likes');

module.exports = app => {

    app.post('/addLikes',async(req,res)=> {
        console.log(req.body);

            const data = await model.findOne({res_id: req.body.res_id});
            console.log(data);
             if (data) {
                 console.log("existed data " );
                 data.likes +=1;
                 data.save();
             } else {
                 new model(req.body).save();
             }


        res.send("ok");
    });
}


// const likes = new Schema ({
// //     res_id : String,
// //     res_name: String,
// //     likes : Number,
// //
// // });