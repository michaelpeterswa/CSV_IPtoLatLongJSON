const fetch = require("node-fetch");
var jsonfile = require('jsonfile');
var csv = require("fast-csv");


const url = "http://api.ipstack.com/addr?access_key=YOUR_KEY_HERE";
var file = 'files/location.json';


///

function writejson(obj) {
 jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
   console.error(err);
 })
}

///

function returnLatlon(address) {

var urlFix = url.replace(/addr/g, address);
fetch(urlFix)
  .then(response => {
    response.json().then(json => {
      var obj = {ip: address,
                 lat: json.latitude,
                 long: json.longitude};

      writejson(obj);
      //console.log(json.longitude);

    });
  })
  .catch(error => {
    console.log(error);
  });
}

function readCSV(){


csv
 .fromPath("files/ip_list.csv")
 .on("data", function(data){
     var str = data.toString();

     returnLatlon(str);
 })
 .on("end", function(){
     console.log("done");
 });

}

readCSV();
