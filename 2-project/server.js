require("dotenv").config({path:"./config/.env"})
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Is Running On Port : ${process.env.PORT} In ${process.env.NODE_ENV} Mode`);
})
