const express = require('express')
const app = express()
app.use(express.static('./resources'))

app.listen(5000,()=>{
    console.log("Server@5000");
})