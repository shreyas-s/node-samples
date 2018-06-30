var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,resp){
var pathName = url.parse(req.url).pathname;
console.log("req for resource "+pathName);
fs.readFile(pathName.substr(1),function(err,data){
    if(err){
        console.log(err);
        resp.writeHead(404,{'Content-Type':'text/html'});
    }
    else{
        resp.writeHead(200,{'Content-Type':'text/html'});
        resp.write(data.toString());

    }
    resp.end();
});

}).listen(8082);
console.log("server is running @ : localhost:8082");