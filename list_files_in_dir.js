var fs = require("fs");

console.log("Going to read directory temp");
fs.readdir("temp",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
   // above console will list all files present within the given path of readdir param i.e /temp here
});
