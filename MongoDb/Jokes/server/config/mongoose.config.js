const mongoose = require('mongoose');

const dBName = "jokes";

mongoose.connect(`mongodb://localhost/${dBName}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(()=>{
        console.log(`You are connected to ${dBName}`);
    })
    .catch((err)=>{
        console.log(err);
        console.log(`Error connecting`)
    })
