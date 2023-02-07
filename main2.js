var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end('<p><a href="/student">Click here!</a></p>\n');
        // res.end();
})

app.get('/student', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end('<p><a href="/">Click here!</a></p>\n');

})

const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log('Server is up')
