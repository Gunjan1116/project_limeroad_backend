const mongoose=require("mongoose");

const womensSchema=mongoose.Schema({
    title:{type:String,require:true},
    imageLink:{type:String,require:true},
    price:{type:Number,require:true},
    author:{type:String,require:true}
})

const Womensmodel=mongoose.model("womens",womensSchema);

module.exports={
    Womensmodel
}