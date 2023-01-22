const express=require("express");
const {Mensmodel}=require("../models/mens.model");
const mensRoute=express.Router();


mensRoute.get("/",async(req,res)=>{
    const {title,author,sortby,q}=req.query
    let que={};
    let sortque={}
    if(title!=undefined&&author!=undefined&&sortby!=undefined&&q==undefined){
        que={title,author}
        sortque={price:sortby}
    }else if(title==undefined&&author!=undefined&&sortby!=undefined&&q==undefined){
        que={author}
        sortque={price:sortby}
    }else if(title!=undefined&&author==undefined&&sortby!=undefined&&q==undefined){
        que={title}
        sortque={price:sortby}
    }else if(title!=undefined&&author!=undefined&&sortby==undefined&&q==undefined){
        que={title,author}
        sortque={};
    }else if(title==undefined&&author==undefined&&sortby!=undefined&&q==undefined){
        que={};
        sortque={price:sortby}
    }else if(title==undefined&&author!=undefined&&sortby==undefined&&q==undefined){
        que={author}
        sortque={};
    }else if(title!=undefined&&author==undefined&&sortby==undefined&&q==undefined){
        que={title};
        sortque={};
    }else if(title==undefined&&author==undefined&&sortby==undefined&&q==undefined){
        que={};
        sortque={};
    }else if(title==undefined&&author==undefined&&sortby==undefined&&q!=undefined){
        sortque={};
        que.author={'$regex':q,'$options':'i'};
    }
    try {
        const requiredData=await Mensmodel.find(que).sort(sortque);
        res.json(requiredData);
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
})

mensRoute.post("/add",async(req,res)=>{
    const data=req.body
    try {
       const sendingData=new Mensmodel(data);
       await sendingData.save()
       res.json("Data add successfully!")
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
mensRoute.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body
    try {
        const reqData=await Mensmodel.findByIdAndUpdate({_id:ID},payload);
        res.json(`Mens data of id ${ID} was updated successfully!`)
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
mensRoute.delete("/remove/:id",async(req,res)=>{
    const ID=req.params.id
    try {
        const reqData=await Mensmodel.findByIdAndDelete({_id:ID});
        res.json(`Mens data of id ${ID} was deleted successfully!`)
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
})
module.exports={
   mensRoute
}