const mongoose  = require('mongoose');
const { Schema } = mongoose;

const likes = new Schema ({
    name: String,
    likes : String,

});

mongoose.model('Restaurant_Likes',likes);