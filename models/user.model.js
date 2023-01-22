const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    gender:{type:String,require:true},
    password:{type:String,require:true}
})
// name ==> String
// email ==> String
// gender ==> String
// password ==> String
const Usermodel=mongoose.model("user",userSchema);

module.exports={
    Usermodel
}