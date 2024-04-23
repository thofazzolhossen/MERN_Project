const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Allow all origins for simplicity. You can adjust the options as needed.
app.use(cors());

// Your routes and other middleware go here...


const mongoose = require('mongoose');



mongoose.connect(`mongodb+srv://tofa_123456:tofa_123456@mern.7yfyb4e.mongodb.net/crudApp?retryWrites=true&w=majority&appName=MERN`).then(()=>{
    console.log("DB Connected");


    app.listen(PORT, ()=>{
        console.log("Server : ${PORT}");
    })



}).catch(error => console.log(error));
