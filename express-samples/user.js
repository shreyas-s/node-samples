var User = require('./sample_mongo_conn');

var om  = new User({
    name: 'Om nama Shiva nama',
    username: 'Om nama',
    password: 'shiva' 
  });
    
  om.save(function(err){
    if(err){ throw err;}
    console.log("success in saving user");
  });
