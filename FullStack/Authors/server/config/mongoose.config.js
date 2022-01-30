const mongoose = require('mongoose')

const dataBase = "authorDB"

mongoose.connect(`mongodb://localhost/${dataBase}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`Connected to ${dataBase}`)
    })
    .catch(err => console.log(err))