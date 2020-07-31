const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    dateAndHour: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numberOfDishes: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending'
    },
    chef: {
        type: Schema.Types.ObjectId,
        ref: 'Chef'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipe: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;