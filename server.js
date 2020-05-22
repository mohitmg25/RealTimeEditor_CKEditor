const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const api = require('./routes/api')
var path = require('path')
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api', api)
app.get('/',function( req , res){
    res.redirect('/home')
})
app.use(express.static(path.join(__dirname+'/public')))
app.get('/*',(req, res)=> {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(PORT,function(){
    console.log('Server running on localhost:'+PORT)
})
