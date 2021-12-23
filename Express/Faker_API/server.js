const express = require('express');
const faker = require('faker');
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const createUser = [
    id = Math.floor(Math.random() * 100000),
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    phoneNumber = faker.phone.phoneNumber(),
    email = faker.internet.email(),
    password = faker.internet.password()
]

const createCompany = [
    id = Math.floor(Math.random() * 100000),
    companyName = faker.company.companyName(),
    address = [
        faker.address.streetAddress(), 
        faker.address.city(), 
        faker.address.state(), 
        faker.address.zipCode(), 
        faker.address.country()
    ]
]

app.get("/api/users/new", (request, response) => {
    response.json({
        createUser
    })
})

app.get("/api/companies/new", (request, response) => {
    response.json({
        createCompany
    })
})

app.get("/api/user/company", (request, response)=>{
    response.json({
        createUser,
        createCompany
    })
})




app.listen(8000, ()=> console.log('connected to port 8000'));