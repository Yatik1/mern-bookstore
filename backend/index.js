const express = require("express");
const mongoose  = require("mongoose");
const PORT = 5555;

const mongoUrl = 'mongodb+srv://yatiksrivastava1:AqtTkN5gOOz9Tcjw@cluster0.6nobb31.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.get('/' , (req,res) => {
    // console.log(req);
    return res.status(234).send("Welcome to HTTPs Request ! ")
})

mongoose.connect(mongoUrl)
    .then(() => {
     console.log("database is connected !");
     app.listen(PORT , () => {
    console.log(`App is listening to the port : ${PORT}`)
})


    })
   .catch((err) => {
    console.log(err);
   })


