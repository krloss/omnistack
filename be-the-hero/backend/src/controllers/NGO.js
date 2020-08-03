const joi = require('@hapi/joi')

const db = require('../config/db')
const {generateUniqueId} = require('../config/utils')

const schema = joi.object({
    name:joi.string().required().min(3),
    email:joi.string().required().email(),
    phone:joi.string().required().regex(/^\+?\d{10,13}/),
    city:joi.string().required(),
    uf:joi.string().required().length(2).uppercase()
})

module.exports = {
    async index(req,res) {
        const ngos = await db('ngos').select()

        return res.json(ngos)
    },
    
    async save(req,res) {
        const {error,value} = schema.validate(req.body)

        if(error)
            return res.status(400).json({
                hasErrors:true,
                errors:[
                    {code:'SVE', message:error.message}
                ]
            })
        
        const id = generateUniqueId()

        await db('ngos').insert({id,...value})

        return res.json({id})
    }
}
