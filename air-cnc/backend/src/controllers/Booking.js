const Booking = require('../models/Booking');

// index, show, save, update, delete

function emitBookingCreate(booking,req) {
    const owner = req.connectedUsers[booking.spot.user];

    if(owner) req.sio.to(owner).emit('booking_create',booking);
}

function emitBookingSave(booking,req) {
    const client = req.connectedUsers[booking.user];

    if(client) req.sio.to(client).emit('booking_save',booking);
}

module.exports = {
    async save(req,res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await booking.populate('user').populate('spot').execPopulate();
        emitBookingCreate(booking,req);
        return res.json(booking);
    },

    async update(req,res) {
        const { user_id } = req.headers;
        const { booking_id } = req.params;
        const { approved } = req.body;
        const booking = await Booking.findById(booking_id).populate('spot');

        if(user_id != booking.spot.user)
            return res.status(400).json({
                hasErrors: true,
                errors: [
                    {code:'UINO', message:'User is not owner.'}
                ]
            });
        
        booking.approved = approved;

        await booking.save();
        emitBookingSave(booking,req);
        return res.json(booking);
    }
};
