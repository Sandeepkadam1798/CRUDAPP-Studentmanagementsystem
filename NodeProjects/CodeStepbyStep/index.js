// const http = require('http');

// http.createServer((req,resp) =>{

//     resp.write("hello sandeep k ");
//     resp.end();
// }).listen(4600,()=>{console.log("servewr running")});


const http =require('http')

http.createServer((req,resp)=>{
    resp.write("hii sandeep kadam")
    resp.end()
}).listen(5000,()=>{console.log("server running")})