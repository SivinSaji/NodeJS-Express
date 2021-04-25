const express=require('express')    //Here we take the library Express. For this we should install the library Express 'npm install express'         
const path=require('path')          //Here we take library path which is inbuilt in nodeJS.Here we use path.join to give the full path of html file in res.senFile function


const app=express()                 //we take express function ina varaible app

app.get('/',function(req,res){                            //This code we will set the root we want. Here we set the base root. and function include the response and request
    res.sendFile(path.join(__dirname,'MDcollege.html'))   //Here we take library path which is inbuilt in nodeJS.Here we use path.join to give the full path of html file in res.senFile function
})
 
app.get('/student',function(req,res){                       //This code we will set the root we want. Here we set the root.Here we set the root /student. and function include the response and request          
    res.sendFile(path.join(__dirname,'input.html'))
})



app.listen(3000,function(){
    console.log(__dirname)              //__dirname here we get the path of the folder
    console.log("Server Started")
})