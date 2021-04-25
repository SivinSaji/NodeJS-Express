//Here we create a server with one root and one root is /about 
//The home page will show the text 'Cross Roads' and root /about will show the text 'About'
const express=require('express')        //Here we take the library Express. For this we should install the library Express 'npm install express'
const app=express()                     //we take express function ina varaible app


app.get('/',function(req,res){         //This code we will set the root we want. Here we set the base root. and function include the response and request
    res.send('Cross Roads')            //Here we print text 'Cross Roads'
})

app.get('/about',function(req,res){   //This code we will set the root we want. Here we set the root about. and function include the response and request
    res.send('About')                 //Here we print text 'About'
}) 
 

app.listen(7000,function(){              //Here we set the port number.And we set the message to be printed @ the time of server is started in a function.
    console.log('SERVER STARTED')
})