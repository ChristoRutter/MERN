const mongoose = require('mongoose')

const dBase = "productDB"


mongoose.connect(`mongodb://localhost/${dBase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected to ${dBase}`)
    })
    .catch(err => console.log('failed to connect to ${dBase}'))
    