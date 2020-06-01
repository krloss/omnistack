const User = require('../models/User')

// index, show, save, update, delete

module.exports = {
    async save(req,res) {
        const { email } = req.body;
        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({ email });

        return res.json(user);
    }
};
