const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chefSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
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
    mainCookSpecialty: {
        type: String,
        required: true
    },
    workingDays: {
        type: [String],
        required: true
    },
    workingCity: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profilePic: String,
    facebookLink: String,
    instagramLink: String,
    twitterLink: String,
    recipes: [ //Vincula este modelo con recipes. Es un array porque hay varias recetas
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe' //Referencia al modelo exportado
        }
    ],
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
    timestamps: true
});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;