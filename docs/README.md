# Node Master Class

## Assignment # 1 | Hello World API

**Components**
1. Router
2. Server

**Endpoints**
http://localhost:3000/hello

**How to start the app**
* Run `Node index.js` From the command-line inside **server** folder on your project's root
* From your browser or Postman, enter the url http://localhost:3000/hello and hit enter. You should see following response: 
```json
{
    "Message": "Hello World!"
}
```
*Also see image ValidEndpoint.jpg in the TestImages folder of this repo*

* If you try to access invalid url like http://localhost:3000/, then you will get this response:
```json
{}
```
*Also see image InvalidEndpoint.jpg in the TestImages folder of this repo*