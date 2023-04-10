// bypass renaming require variable
export {}

const mongoose = require("mongoose")

const ClientsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please enter a name"],
        maxlength: [30, "Name canot be more than 30 characters."],
        trim: true,
    },
})

module.exports = mongoose.model("Clients", ClientsSchema)
