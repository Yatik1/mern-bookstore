const mongoose = require('mongoose')

const bookStore = mongoose.Schema(
    {
        title: {
            type:String,
            required : true,
        },
        author: {
            type:String,
            required:true,
        },
        publishYear: {
            type:Number,
            required: true,
        }
    } , 
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book Store",bookStore);
module.exports = Book;