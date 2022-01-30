const mongoose = require('mongoose')


const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "The authors name must be at least 3 characters long"]
    }
}, {timestamps: true})


const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author