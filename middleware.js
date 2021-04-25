/*Here we use MIDDLEWARE it is used to perform any action when a
request come from a user to server here we app.use*/
const express=require('express')
const path=require('path')

const app=express()

app.use(function(req,res,next){            /*This is the middleware used here. we use app.use we print 'Request come from user' when a requestcome to server it is printed in the console*/
    console.log('Request come from user')
    next()
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'MDcollege.html'))
})

app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'input.html'))
})

app.post('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'MDcollege.html'))
})

app.listen(7000,()=>console.log('Server Started'))
