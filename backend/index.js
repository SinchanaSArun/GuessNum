const express=require("express")
const cors=require ("cors")
const mongoose=require ("mongoose");
const GuessNumModel=require('./models/GuessNum')

const app=express()
app.use(express.json())
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}))

mongoose.connect("mongodb://127.0.0.1:27017/GuessNum");

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    console.log(email)
    console.log(password)
    GuessNumModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password==password){
res.data="success"          
            console.log("success")
        }else{
            console.log("incorrect pass")
        }
    }else{
        consolelog("no user")
    }
})
})

  
app.post('/register',(req,res)=>{
    GuessNumModel.create(req.body)
    .then(GuessNum=>res.json(GuessNum))
    .catch(err=>res.json(err))

})
app.listen(3001,()=>{
    console.log('serveer is running')
})
  
