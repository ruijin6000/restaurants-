const mongoose  = require('mongoose');
const { Schema } = mongoose;

const likes = new Schema ({
    res_id : String,
    res_name: String,
    likes : Number,

});

mongoose.model('Restaurant_Likes',likes);