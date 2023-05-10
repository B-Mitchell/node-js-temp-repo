const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req)
    res.write('Hello world, welcome to our homepage!');
    res.end();
})
server.listen(5000);