require("dotenv").config({path:"./config/.env"})
const express = require("express");
const bootcamps = require("./routes/bootcamps")

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/v1/bootcamps",bootcamps)


app.listen(PORT,()=>{
    console.log(`Server Is Running On Port : ${process.env.PORT} In ${process.env.NODE_ENV} Mode`);

})