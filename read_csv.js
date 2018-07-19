var csv = require("fast-csv");

csv
 .fromPath("ip_list.csv")
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
     console.log("done");
 });
