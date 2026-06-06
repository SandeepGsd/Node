const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                
                res.end('404 Not Found');
            }
            res.end(data);
        });
        else if (req.url === '/about') {
            fs.readFile('about.html', (err, data) => {
                if (err) {
                    res.end('404 Not Found');
                }
                res.statusCode = 200;
                res.end(data);
            });
        }
        else if (req.url === '/contact-me  ') {
            fs.readFile('contact-me.html', (err, data) => {
                if (err) {
                    res.end('404 Not Found');
                }
                res.statusCode = 200;
                res.end(data);
            });
        }
        else {
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 