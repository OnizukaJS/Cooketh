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
    chef: {
        type: Schema.Types.ObjectId,
        ref: 'Chef'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipe: [ //Vincula este modelo con recipes. Es un array porque hay varias recetas
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe' //Referencia al modelo exportado
        }
    ]
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;