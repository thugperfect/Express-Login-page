const express = require('express')
const app = express()
const { data }= require('./data')
app.use(express.static('./resources'))
app.use(express.urlencoded({extended:false}))

app.get('/api/users',(req,res)=>{
    res.status(200)
    res.json(data)
})

app.post('/login',(req,res)=>{
    const request= req.body
    data.map((prop)=>{
        if(prop.uname === request.uname && prop.passwd === request.passwd){
            res.send("Login Successful")
        }
        else{
            res.send("Fuck up Buddy")
        }
    })
   
})
app.listen(5000,()=>{
    console.log("Server@5000");
})