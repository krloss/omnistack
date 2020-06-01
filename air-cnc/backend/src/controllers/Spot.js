const Spot = require('../models/Spot');
const User = require('../models/User');

// index, show, save, update, delete

module.exports = {
    async index(req,res) {
        const { tech } = req.query;
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async save(req,res) {
        const { filename } = req.file;
        const { company,price,techs } = req.body;
        const { user_id } = req.headers;
        const user = await User.findById(user_id);

        if(!user)
            return res.status(400).json({
                hasErrors: true,
                errors: [
                    {code:'UDNE', message:'User does not exists.'}
                ]
            });
        
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            techs: techs.split(',').map(it => it.trim()),
            company,
            price
        });

        return res.json(spot);
    }
};
