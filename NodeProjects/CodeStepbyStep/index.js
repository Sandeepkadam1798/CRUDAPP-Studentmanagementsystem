// // const http = require('http');

// // http.createServer((req,resp) =>{

// //     resp.write("hello sandeep k ");
// //     resp.end();
// // }).listen(4600,()=>{console.log("servewr running")});


// // const http =require('http')

// // http.createServer((req,resp)=>{
// //     resp.write("hii sandeep kadam")
// //     resp.end()
// // }).listen(5000,()=>{console.log("server running")})



// // const http = require('http')

// // http.createServer((req,resp)=>{
// //     resp.write("hello sandeep")
// //     resp.end()
// // }).listen(5000,()=>{console.log("server running")})

// const http =require('http')
// const data=require('./data')
// http.createServer((req,resp)=>{

//     resp.writeHead(200,{'content-type':'application'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000)


// const fs =require('fs')
// const path =require('path')
// const dirpath=path.join(__dirname,'CRUD');
// const filepath=`${dirpath}/apple.txt`;  
// // const filepaths=`${dirpath}/pinapple.txt`;  

// // fs.writeFileSync(filepath,'this is apple file');
// // fs.writeFileSync(filepaths,'this is pinapple file');


const express=require ('express');

const app=express();
app.get('',(req,resp)=>{
resp.send("hii sandeep this is home page");

});

app.get('/about',(req,resp)=>{
    resp.send("hii sandeep this is About page");

})

app.listen(5000);
