const express = require('express');
const mongoose = require('mongoose');

const routes = require('./config/routes');

const app = express();

mongoose.connect('mongodb+srv://air-cnc:41r-cnc@cluster0-fv3fg.gcp.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// GET, POST, PUT, DELETE

// req.query -> query params
// req.params ->  route params
// req.body -> message request
// req.headers -> header param

app.use(express.json())
app.use(routes);

app.listen(4321);
