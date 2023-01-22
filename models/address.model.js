const mongoose=require("mongoose");
const addressSchema=mongoose.Schema({
    country:{type:String,require:true},
    name:{type:String,require:true},
    mobileno:{type:Number,require:true},
    pincode:{type:Number,require:true},
    city:{type:String,require:true},
    state:{type:String,require:true},
    flatno:{type:Number,require:true},
    area:{type:String,require:true},
    landmark:{type:String,require:true},
    userID:{type:String,require:true}
})

const Addressmodel=mongoose.model("addressofuser",addressSchema);

module.exports={
    Addressmodel
}