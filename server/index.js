/* 
*
* Server for the new API for Home Assignment # 1 
*
*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});