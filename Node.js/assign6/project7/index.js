const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT
);

// import routes

const productRoutes = require('./routes/product');

// Middleware

app.use(express.json());
app.use(cors());

// route middleware

app.use('/api/products', productRoutes)

app.listen(4000, ()=>{
    console.log(`app is listening to port 4000!`)
})