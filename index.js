const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/restaurant_likes');

mongoose.connect(keys.mongoURI);

const app = express();



require('./routes/HomePageRoute')(app);
require('./services/addLikes')(app);

if (process.env.NODE_ENV === ' production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*',(req,res) => {
      res.sendFile(path.resolve(_dirname,'client','build','index.html'))
  });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT);