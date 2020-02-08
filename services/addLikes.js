const mongoose = require('mongoose');

const likes = mongoose.model('Restaurant_Likes');

module.exports = app => {
    app.post('/addLikes',(req,res)=> {
        new likes({name:'test',likes:'5'}).save().then(like => done(null,like));
        res.send("ok");
    });
}
