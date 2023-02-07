var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.write('<p><a href="http://localhost:7000/student">Student</a></p>\n');
    res.end();
})

app.get('/student', (req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.write('<p><a href="http://localhost:7000">Back to home page</a></p>\n');
    res.end();
})

const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log('Sever is up!')
