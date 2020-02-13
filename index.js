const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/restaurant_likes');
const session = require('express-session');
const cookieParser = require('cookie-parser');


mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(session({secret: 'my_secret', resave: false, saveUninitialized: false}));
app.use(cookieParser());
require('./routes/api')(app);
require('./services/addLikes')(app);


app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);