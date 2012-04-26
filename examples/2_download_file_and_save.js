var http = require('http')
var fs = require('fs')

var file = fs.createWriteStream('/tmp/output')

http.get({host: 'localhost',
          port: 9292}, function(res) {
    res.pipe(file)
});
