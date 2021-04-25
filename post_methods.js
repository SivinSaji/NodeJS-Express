/*Both GET and POST method is used to transfer data from client to server in HTTP protocol but 
Main difference between POST and GET method is that GET carries request parameter appended in URL string 
while POST carries request parameter in message body which makes it more secure way of transferring data from client to server*/


const express=require('express')    
const path=require('path')          

const app=express()                 


app.get('/signup',function(req,res){                  //This code we will set the root we want. Here we set the /signup root. and function include the response and request
    res.sendFile(path.join(__dirname,'input.html'))  
    
})


app.post('/signup',function(req,res){            //Here we use root name /signup but it is already used but here we POST method and earlier we had used GET method so thats we can use the same root-name
    res.send('Account Created')
})
 
app.get('/about',function(req,res){                       
    res.sendFile(path.join(__dirname,'MDcollege.html'))
})



app.listen(3000,function(){             
    console.log("Server Started")
})