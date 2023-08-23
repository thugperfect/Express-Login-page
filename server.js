const express = require('express')
const app = express()
const { data }= require('./data')
const { stringify } = require('querystring')
app.use(express.static('./resources'))
app.use(express.urlencoded({extended:false}))

app.get('/api/users',(req,res)=>{
    res.status(200)
    res.json(data)
})

app.post('/login',(req,res)=>{
    const request = req.body
    let flag = false
    data.map((prop)=>{
        if(prop.uname === request.uname && prop.passwd === request.passwd){
            flag = true
            res.send("welcome")
        }
       
    })
    if(flag === false){
        res.send("fuck up")
    }

   
})
app.listen(5000,()=>{
    console.log("Server@5000");
})