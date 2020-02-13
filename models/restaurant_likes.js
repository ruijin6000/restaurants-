const mongoose  = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const likesSchema = new Schema ({
    res_id : String,
    res_name: String,
    res_add: String,
    res_cus: String,
    res_likes : Number,

});

mongoose.model('Restaurant_Likes',likesSchema);