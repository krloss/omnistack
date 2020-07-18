const db = require('../config/db')

module.exports = {
    async save(req,res) {
        const {id} = req.body
        const ngo = await db('ngos').where('id',id).select('name').first()

        if(!ngo)
            return res.status(400).json({
                hasErrors:true,
                errors:[
                    {code:'NNFWTI', message:'No NGO found with this ID.'}
                ]
            })
        
        return res.json(ngo)
    }
}