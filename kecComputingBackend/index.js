var express = require('express')
var app = express()
const PORT = 3001
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to backend",url:"localhost",port:PORT})
})
app.listen(PORT,()=>{
    console.log(`Backend server started\nUrl:http://localhost:${PORT}`)
})