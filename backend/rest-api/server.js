const express = require('express')
const app = express()
const {searchBar} = require('./routes/searchBar')
const mongoose = require('mongoose')
const {computers} = require('./routes/computes');
const {users} = require('./routes/users');
const {books} = require('./routes/books')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.json())
app.use(cors())
users(app);
searchBar(app);
books(app);
computers(app);
mongoose.connect(process.env.backendURL, 
    {useNewUrlParser: true, useUnifiedTopology: true}).
    then(res => res).catch(e => console.log(e))
    
app.listen(3002, () => console.log('Server Started'))