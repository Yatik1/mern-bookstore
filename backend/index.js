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

//get all the books from the database
app.get("/books" , async (req,res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            data:books,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({error:error.message})
    }
})


//get one book from the database by its id 
app.get("/books/:id" , async(req,res) => {

    try {

        const {id} = req.params
     
        const book = await Book.findById(id)
        return res.status(200).json(book)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({error:error.message})
    }
})

// update data or book information 
app.put("/books/:id" , async (req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return response.status(400).send({message: 'Sends all the required fields:(title ,author,publishYear)'})
        }

        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)

        if( !result ) { 
            return res.status(404).json({message : 'Book not found'})
        }

        return res.status(200).send({message : 'Book updated successfully !'})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message})
    }
})

//delete data or info
app.delete("/books/:id" , async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id)

        if(!result) {
            return res.status(404).json({message : 'Book not found'})
        }

        return res.status(200).send({message : 'Book deleted successfully !'})

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


