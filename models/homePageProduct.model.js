const mongoose=require("mongoose");

const homepageproductSchema=mongoose.Schema({
    title:{type:String,require:true},
    imageLink:{type:String,require:true},
    author:{type:String,require:true},
    followers:{type:String,require:true}
})

const Homepageproductmodel=mongoose.model("homeproduct",homepageproductSchema);

module.exports={
    Homepageproductmodel
}