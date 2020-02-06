const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/restaurant_likes');

mongoose.connect(keys.mongoURI);

const app = express();



require('./routes/mainPage_Route')(app);
require('./services/addLikes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);