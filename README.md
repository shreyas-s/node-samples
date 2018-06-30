 This Repo contains sample code blocks for Nodejs

Express framework:
 
Express is a light-weight web application framework in Nodejs to help organize your web application into an MVC architecture on the server side. 
its most important feature is routing.

That you don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. With Express.js it there for you to use.
(src - https://stackoverflow.com/questions/12616153/what-is-express-js)
	we use body-parser during POST requests to fetch the params sent through POST method by client.

	- body-parser extract the entire body portion of an incoming request stream and exposes it on req.body . The middleware was a part of Express.js earlier but now you have to install it separately. This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
