require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routers = require('./routes');
const app = express();

//middlewares
app.use(
    cors({
        exposedHeaders: ['Content-Disposition'],
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));

//connect DB
mongoose 
 .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
 })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//PORT
const PORT = process.env.PORT || 5001;

//routes
app.use('/api/v1', routers);

///middleware error
app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
    })
})

//routes
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})