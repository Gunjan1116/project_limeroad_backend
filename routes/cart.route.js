const express=require("express");
const {Cartmodel}=require("../models/cart.model");
const cartRoute=express.Router();


cartRoute.get("/",async(req,res)=>{
    const userID=req.body.userID;
    try {
        const requiredData=await Cartmodel.find({userID});
        res.json(requiredData);
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
})

cartRoute.post("/add",async(req,res)=>{
    const data=req.body
    try {
       const sendingData=new Cartmodel(data);
       await sendingData.save()
       res.json("Data add successfully!")
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
cartRoute.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    const cartItem=await Cartmodel.findOne({_id:ID});
    const userID_in_cart=cartItem.userID;
    const userID_making_req=payload.userID;
    try {
        if(userID_in_cart!=userID_making_req){
            res.json({"msg":"You are not authorized"})
        }else{
            const reqData=await Cartmodel.findByIdAndUpdate({_id:ID},payload);
            res.json(`Mens data of id ${ID} was updated successfully!`)
        }
        
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
cartRoute.delete("/remove/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    const cartItem=await Cartmodel.findOne({_id:ID});
    const userID_in_cart=cartItem.userID;
    const userID_making_req=payload.userID;
    try {
        if(userID_in_cart!=userID_making_req){
            res.json({"msg":"You are not authorized"})
        }else{
            const reqData=await Cartmodel.findByIdAndDelete({_id:ID});
            res.json(`Mens data of id ${ID} was deleted successfully!`)
        }
        
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
module.exports={
   cartRoute
}