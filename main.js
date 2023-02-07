// var http = require('http')

// var server = http.createServer(function(req, res) {
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//     }else if(req.url === '/student'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<html><body><p>This is student.</p></body></html>');
//         res.end();
//     }else{
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<html><body><p>The page does not exits.</p></body></html>');
//         res.end();
//     }
    
// })

// const PORT = 8000
// server.listen(PORT, function(){
//     console.log("Server is running!")
// })

// const { Console } = require('console');

var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
})

app.get('/student',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write('<html><body><p>This is the student page.</p></body></html>');
    res.end();
})

const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log('Server is up!')
