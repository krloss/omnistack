const express = require('express')

const Session = require('../controllers/Session')
const NGO = require('../controllers/NGO')
const Profile = require('../controllers/Profile')
const Incident = require('../controllers/Incident')

const routes = express.Router()

routes.post('/sessions',Session.save)

routes.get('/ngos',NGO.index)
routes.post('/ngos',NGO.save)

routes.get('/profile',Profile.index)

routes.get('/incidents',Incident.index)
routes.post('/incidents',Incident.save)
routes.delete('/incidents/:id',Incident.delete)

module.exports = routes
