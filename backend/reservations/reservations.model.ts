// bypass renaming require variable
export {}

const mongoose = require("mongoose")

const ReservationsSchema = new mongoose.Schema({
    reservation: {
        type: Date,
        required: [true, "Please enter your work schedule"],
        trim: true,
    },
})

module.exports = mongoose.model("Reservations", ReservationsSchema)
