const crypto = require('crypto')

const db = require('../config/db')

module.exports = {
    async index(req,res) {
        const ngos = await db('ngos').select()

        return res.json(ngos)
    },
    
    async save(req,res) {
        const {name,email,phone,city,uf} = req.body
        const id = crypto.randomBytes(4).toString('HEX')

        await db('ngos').insert({id,name,email,phone,city,uf})

        return res.json({id})
    }
}
