const express = require('express');
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/api/welcome", (request, response) => {
    response.json({message: "Welcome!"});
})

app.post("/api/welcome", (request, response) => {
    response.json({
        message: ["Hulk","She-Hulk","Red-hulk"],
        ourRequestBody: request.body
    });
})




app.listen(8000, ()=> console.log('connected to port 8000'));