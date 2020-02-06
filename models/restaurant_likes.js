const mongoose  = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const likes = new Schema ({
    name: String,
    likes : String,

});

mongoose.model('Restaurant Likes',likes);