const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
}, {timestamps: true})

const joke = mongoose.model("joke", JokeSchema);

module.exports = joke;