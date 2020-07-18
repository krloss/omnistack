const db = require('../config/db')

module.exports = {
    async index(req,res) {
        const {page = 0} = req.query
        const [{size}] = await db('incidents').countDistinct({size:'id'})
        const incidents = await db('incidents as i').limit(5).offset(page * 5)
            .join('ngos as n','n.id','i.ngo_id').select([
                'i.*',
                'n.name as ngo_name',
                'n.email as ngo_email',
                'n.phone as ngo_phone',
                'n.city as ngo_city',
                'n.uf as ngo_uf'
            ])
        
        res.header('X-Total-Count',size)
        return res.json(incidents)
    },
    
    async save(req,res) {
        const {title,description,value} = req.body
        const ngo_id = req.headers.authorization

        const [id] = await db('incidents').insert({title,description,value,ngo_id})

        return res.json({id})
    },

    async delete(req,res) {
        const {id} = req.params
        const ngo_id = req.headers.authorization
        const [{size}] = await db('incidents').where({id,ngo_id}).count({size:'id'})

        if(!size)
            return res.status(400).json({
                hasErrors:true,
                errors:[
                    {code:'ONP', message:'Operation not permitted.'}
                ]
            })
        
        await db('incidents').where('id',id).delete()

        return res.status(204).send()
    }
}
