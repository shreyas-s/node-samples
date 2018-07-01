var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));

app.get('/index.html',function(req,resp){
	resp.sendFile(__dirname + "/" + "index.html");

});

app.get('/process_get',function(req,resp){
console.log("inside process get method");
response = {
	first_name : req.query.first_nam,
	last_name: req.query.last_nam
};
console.log(response);
resp.end(JSON.stringify(response));
});

//app.post('/process_post',urlEncodedParser,function(req,resp){
	app.post('/process_post',urlEncodedParser,function(req,resp){
console.log(" inside process post method");
console.log(req);

response = {
	fname: req.body.first_name,
	lname: req.body.last_name
	}

resp.end(JSON.stringify(response));
});

// routing starts
app.get('/',function(req,resp){
	console.log("got a get resp to Express basics");
	resp.send(" Hello GET triggered");
});

app.post('/',function(req,resp){
	
		console.log("got a post req For Express Basics");
		resp.send("Hello POST triggered");
});

app.delete('/del_usr',function(req,resp){
console.log('got a del req');
resp.send("Hello DEL triggered");
});

app.get('/ab*c',function(req,resp){
  console.log("Got a GET Request for pattern matching 'ab*c'");
	resp.send("Hello Pattern Match detected");
});

var servr = app.listen(8083,function(){
var host = servr.address().address
var port = servr.address().port
console.log(" sample express app listening @ http://%s:%s",host,port)

});
