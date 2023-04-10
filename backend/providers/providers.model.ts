const mongoose = require("mongoose")

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please enter a name"],
        maxlength: [30, "Name canot be more than 30 characters."],
        trim: true,
    },
    schedule: {
        type: Date,
        required: [true, "Please enter your work schedule"],
        trim: true,
    },
    shiftStart: {
        type: String,
        required: [true, "Please enter your starting shift time"],
        trim: true,
    },
    shiftEnd: {
        type: String,
        required: [true, "Please enter your ending shift time"],
        trim: true,
    },
})

module.exports = mongoose.model("Providers", ProviderSchema)
