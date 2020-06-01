const express = require('express');

const upload = require('./upload');
const Session = require('../controllers/Session');
const Spot = require('../controllers/Spot');
const Dashboard = require('../controllers/Dashboard');
const Booking = require('../controllers/Booking')

const routes = express.Router();

routes.post('/sessions',Session.save);

routes.get('/spots',Spot.index);
routes.post('/spots',upload.single('thumbnail'),Spot.save);
routes.post('/spots/:spot_id/bookings',Booking.save);

routes.get('/dashboard',Dashboard.show);

module.exports = routes;
