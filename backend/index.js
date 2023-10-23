const express = require("express");
const mongoose  = require("mongoose");
const Book = require('./models/bookModel')


const PORT = 5555;

const mongoUrl = 'mongodb+srv://yatiksrivastava1:AqtTkN5gOOz9Tcjw@cluster0.6nobb31.mongodb.net/?retryWrites=true&w=majority'

const app = express();

// Middleware for parsing request body 
app.use(express.json())

app.get('/' , (req,res) => {
    // console.log(req);
    return res.status(234).send("Welcome to HTTPs Request ! ")
})

app.post('/books' , async (req,res)=> {
     try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return response.status(400).send({message: 'Sends all the required fields:(title ,author,publishYear)'})
        }

       const newBook = {
         title:req.body.title,
         author:req.body.author,
         publishYear:req.body.publishYear,
       };

       const book = await Book.create(newBook)
       return res.status(201).send(book)

     } catch (error) {
         console.log(error.message);
         res.status(500).send({message : error.message})
     }
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


