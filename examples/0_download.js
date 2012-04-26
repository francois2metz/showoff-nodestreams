var http = require('http')

http.get({host: 'localhost',
          port: 9292}, function(res) {
    res.on('data', function(data) {
        process.stdout.write(data)
    })
})
