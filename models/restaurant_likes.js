const mongoose  = require('mongoose');
const { Schema } = mongoose;

const likes = new Schema ({
    res_id : String,
    res_name: String,
    res_add: String,
    res_cus: String,
    res_likes : Number,

});

mongoose.model('Restaurant_Likes',likes);