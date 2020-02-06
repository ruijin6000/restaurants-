const mongoose = require('mongoose');

const Like = mongoose.model('Restaurant_Likes');

module.exports = app => {
    app.post('/addLikes',(req,res)=> {
        new Like({name:'test',likes:'5'}).save().then(like => done(null,like));
    });
}
