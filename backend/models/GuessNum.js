const mongoose=require("mongoose");

const GuessNumSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    score: {
        type: Number,
        default: 0 // Default score is 0 when the user registers
      },
    highScore: { type: Number, default: 0 } // Field for storing the highest score
    })

const GuessNumModel=new mongoose.model("GuessNum",GuessNumSchema)
module.exports=GuessNumModel

