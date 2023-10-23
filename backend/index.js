const express = require("express")
const PORT = 5555;


const app = express();

app.get('/' , (req,res) => {
    // console.log(req);
    return res.status(234).send("Welcome to HTTPs Request ! ")
})

app.listen(PORT , () => {
    console.log(`App is listening to the port : ${PORT}`)
})

