const express=require("express");
const cors=require("cors");
const { connection } = require("./config/db");
const {userRoute}=require("./routes/user.route");
const {homeproductRoute}=require("./routes/homeLanding.route");
const {mensRoute}=require("./routes/mens.route");
const {womensRoute}=require("./routes/womens.route");
const {cartRoute}=require("./routes/cart.route");
const {addressRoute}=require("./routes/address.route");
const {authentication}=require("./middlewares/authentication.middleware");
require("dotenv").config();

const app=express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.json(`Welcome to home page of Light Fashion`)
})
app.use("/homepageproduct",homeproductRoute);
app.use("/mens",mensRoute);
app.use("/womens",womensRoute);
app.use("/users",userRoute);
app.use(authentication);
app.use("/cart",cartRoute);
app.use("/address",addressRoute);
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`Connected to DB`);
    } catch (error) {
        console.log(`Not able to connect to DB`);
        console.log(error.message);
    }
    console.log(`server is running at port ${process.env.port}`)
})