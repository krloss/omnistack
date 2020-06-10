const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socket_io = require('./config/socket-io');
const routes = require('./config/routes');

const app = express();
const appSIO = socket_io(app);

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

app.use(appSIO.requestHandler());
app.use(cors());
app.use(express.json())
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

appSIO.server.listen(4321);
