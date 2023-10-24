const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const booksRoute = require("./routes/booksRoute")

const dotenv = require('dotenv');
dotenv.config();

const PORT = 5555;


const app = express();

// Middleware for parsing request body 
app.use(express.json())

//Middleware for handling CORS policy 
//ALlow all origin with default of CORS (*)
app.use(cors());




app.get('/' , (req,res) => {
    // console.log(req);
    return res.status(234).send("Welcome to HTTPs Request ! ")
})

app.use("/books" , booksRoute)

mongoose.connect(process.env.URI)
    .then(() => {
     console.log("database is connected !")
     app.listen(PORT , () => {
    console.log(`App is listening to the port : ${PORT}`)  
})


    })
   .catch((err) => {
    console.log(err);
   })


