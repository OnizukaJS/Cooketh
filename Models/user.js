const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String, //Cambiamos a string
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    diet: {
        type: String,
        required: true
    },
    allergies: {
        type: [String],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture: String,
    description: String,
    facebook: String,
    instagram: String,
    twitter: String,
    pendingBookings: [ //Vincula este modelo con pending Bookings. Es un array proque pueden haber varios pending bookings.
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ],
    acceptedBookings: [ //Vincula este modelo con pending Bookings. Es un array proque pueden haber varios pending bookings.
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
}, {
    //Para saber la hora
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;