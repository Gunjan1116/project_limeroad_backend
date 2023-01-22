const mongoose=require("mongoose");

const mensSchema=mongoose.Schema({
    title:{type:String,require:true},
    imageLink:{type:String,require:true},
    price:{type:Number,require:true},
    author:{type:String,require:true}
})

const Mensmodel=mongoose.model("mens",mensSchema);

module.exports={
    Mensmodel
}