const express = require("express");
const mongoose  = require("mongoose");

const booksRoute = require("./routes/booksRoute")

const dotenv = require('dotenv');
dotenv.config();

const PORT = 5555;

// const mongoUrl = 'mongodb+srv://yatiksrivastava1:AqtTkN5gOOz9Tcjw@cluster0.6nobb31.mongodb.net/?retryWrites=true&w=majority'

const app = express();

// Middleware for parsing request body 
app.use(express.json())


app.get('/' , (req,res) => {
    // console.log(req);
    return res.status(234).send("Welcome to HTTPs Request ! ")
})

app.use("/books" , booksRoute)

mongoose.connect(process.env.URI)
    .then(() => {
     console.log("database is connected !");
     app.listen(PORT , () => {
    console.log(`App is listening to the port : ${PORT}`)
})


    })
   .catch((err) => {
    console.log(err);
   })


