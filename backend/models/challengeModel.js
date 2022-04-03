const mongoose = require("mongoose")

const challengeRequestSchema = mongoose.Schema({
    challenge: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("challengeRequestSchema", challengeRequestSchema)