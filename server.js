const express = require('express')
const app = express()
const { data }= require('./data')
app.use(express.static('./resources'))

app.post('/api/users',(req,res)=>{
    res.status(200).send(data)
})

app.listen(5000,()=>{
    console.log("Server@5000");
})