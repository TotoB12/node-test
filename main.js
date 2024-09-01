const http = require('http');
console.log('debug after http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hi');
});

server.listen(8000, '0.0.0.0', () => {
    console.log(`Server is running on port 8000`);
});

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
