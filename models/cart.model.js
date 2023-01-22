const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
    title:{type:String,require:true},
    imageLink:{type:String,require:true},
    price:{type:Number,require:true},
    author:{type:String,require:true},
    userID:{type:String,require:true}
})

const Cartmodel=mongoose.model("cart",cartSchema);

module.exports={
    Cartmodel
}