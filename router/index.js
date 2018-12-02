/*
*
* Main router file
*/

// Define handlers
const handlers = {
    hello: (data, callback) => {
        // Callback a http status code, and a payload object
        callback(200, { 'Message' : 'Hello World!' });
    },
    notFound: (data, callback) => {
        callback(404);
    }
};

// Define the router
const router = {
    'hello': handlers.hello
};

// Export the router module
module.exports = { 
    router,
    handlers 
};