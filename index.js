const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/restaurant_likes');
require('./models/user');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const db = require('./models/mySql');


db.execute('SELECT * FROM products')
    .then(result=>{
        console.log(result[0],result[1])
    })
    .catch(err=>{
        console.log(err);
    });


mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());

app.use(session({secret: 'my_secret', resave: false, saveUninitialized: false}));
app.use(cookieParser());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

require('./routes/api')(app);
require('./services/addLikes')(app);


/******** Graphql *******/
const graphqlHttp = require('express-graphql');
const graphqlSchema= require('./graphql/schema');
const graphqlResolver= require('./graphql/resolvers');
app.use('/graphql',graphqlHttp({
    schema : graphqlSchema,
    rootValue : graphqlResolver,
    graphiql: true,
}));
/** ********************/


app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    //
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);



