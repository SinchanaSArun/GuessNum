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

app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    console.log(email)
    console.log(password)
    GuessNumModel.findOne({email:email})
    .then(user=>{
        console.log(user)
        if(user.password===password){
            res.json(user)
        }
        else{
            res.json("failure")
        }
    })
})

  
app.post('/register',(req,res)=>{
    GuessNumModel.create(req.body)
    .then(GuessNum=>res.json(GuessNum))
    .catch(err=>res.json(err))

})

app.post('/gameover',(req,res)=>{
    GuessNumModel.findOneAndUpdate({
        email:req.body.email
    },{
        highscore:req.body.highscore,
        score:req.body.score
    })
    .then(GuessNum=>res.json(GuessNum))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log('serveer is running')
})
  
