const knex = require('knex')

const config = require('../../knexfile')
const env = process.env.NODE_ENV
const connection = knex(config[env ? env : 'development'])

module.exports = connection
