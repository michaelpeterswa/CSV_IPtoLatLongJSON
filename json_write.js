var jsonfile = require('jsonfile');

var file = 'location.json';
var obj = {ip: '192.168.0.1',
           lat: '49.555',
           long: "-122.453"};

jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
  console.error(err);
})
