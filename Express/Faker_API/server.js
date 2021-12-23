const express = require('express');
const faker = require('faker');
const app = express();


app.use(express.json)
app.use(express.urlencoded({extended: true}));



// const createUser = () => {

// }

app.get("/api/faker", (request, response) => {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    response.json({
        firstName: name,
        userEmail: email
    })
})



app.listen(8000, ()=>console.log("connected to port 8000"))