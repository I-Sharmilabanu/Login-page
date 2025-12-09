const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

var email="netflix07@gmail.com"
var password="password07"
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){
    console.log(req.body.username)
    if(req.body.email === email && req.body.password === password){
    res.send("Successfull")
}else{
    res.send("invalid email or password")
}})

app.listen(4000,function(){
    console.log("server start")
})