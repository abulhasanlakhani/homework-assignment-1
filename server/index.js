/* 
* Server for the new API for Home Assignment # 1 
*/

const http = require('http');
const url = require('url');

const { router, handlers } = require('../router');

const server = http.createServer((req, res) => {
    const trimmedPath = getRequestPathFromUrl(req);

    // Choose the handler this request should go to.
    // If one is not found use the NotFound handler
    const chooseHandler = typeof(router[trimmedPath]) !== 'undefined' 
        ? router[trimmedPath] 
        : handlers.notFound;

    // Construct the data object to send to the handler
    const data = {};
    
    // Route the request to the handler specified in the router
    chooseHandler(data, (statusCode, payload) => {
        // Use the status code called back by the handler, or default to 200
        statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

        // Use the payload called back by the handler, or default to empty object
        payload = typeof(payload) == 'object' ? payload : {};

        var payloadString = JSON.stringify(payload);

        // Return payload in JSON format
        res.setHeader('Content-Type', 'application/json');

        res.writeHead(statusCode);
        res.end(payloadString);

        console.log('Returning this response: ', statusCode, payloadString);
    });
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});

const getRequestPathFromUrl = (req) => {
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;

    // Filter non-required characters
    return path.replace(/^\/+|\/+$/g, '');
};