const express=require("express");
const {Addressmodel}=require("../models/address.model");
const addressRoute=express.Router();


addressRoute.get("/",async(req,res)=>{
    const {q}=req.query
    let que={};
    if(q!=undefined){
        que.name={'$regex':q,'$options':'i'}
    }else{
        que={};
    }
    
    try {
        const requiredData=await Addressmodel.find(que);
        res.json(requiredData);
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
})

addressRoute.post("/add",async(req,res)=>{
    const data=req.body
    try {
       const sendingData=new Addressmodel(data);
       await sendingData.save()
       res.json("Data add successfully!")
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})

module.exports={
    addressRoute
}