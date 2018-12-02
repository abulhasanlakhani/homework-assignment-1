/* 
*
* Server for the new API for Home Assignment # 1 
*
*/

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;

    // Filter non-required characters
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    res.end(`Trimmed Path is: ${trimmedPath}`);
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});
