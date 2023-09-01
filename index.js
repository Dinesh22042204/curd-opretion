const express = require('express')
const mongoose = require('mongoose')
const app = express()

const url = 'mongodb://0.0.0.0:27017/demo'

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function() {
    console.log("connected...") 
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
const studentRouter = require('./routes/students')
app.use('/aliens', alienRouter)
app.use('/students', studentRouter)


app.listen(9000, function() {
    console.log("Server started")
})

