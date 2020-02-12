const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');
const bodyParser = require('body-parser');
require('./models/restaurant_likes');
const session = require('express-session');
const cookieParser = require('cookie-parser');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(session({secret:'my_secret',resave:false,saveUninitialized:false}));
app.use(cookieParser());
require('./routes/api')(app);
require('./services/addLikes')(app);

// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// if (process.env.NODE_ENV === 'production') {
//
//
//


    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });


const PORT = process.env.PORT || 5000;



app.listen(PORT);