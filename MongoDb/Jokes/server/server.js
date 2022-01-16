const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require("./config/mongoose.config")
require("./routes/jokes.routes")(app)

const portNum = 8000

app.listen(8000, ()=>{console.log(`Server connected on port ${portNum}`)})
