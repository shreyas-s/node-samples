var http = require('http');
var options = { host: 'localhost',port: '8082',path: '/index.html'};
try{
var cb = function(resp){
    var body = '';
    resp.on('data',function(data){
        body += data;
    });
    resp.on('end',function(){
        console.log(body);
    });
}
var req = http.request(options,cb);
req.end();
}
catch(err){
  console.log("error occured:");
console.log(err);
}
