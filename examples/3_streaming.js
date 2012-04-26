var net = require('net')
var Stream = require('stream')

var stream = new Stream()
setInterval(function() {
    stream.emit('data', 'plop\n')
}, 1000);

var server = net.createServer(function(c) {
    console.log('accepted connection')
    stream.pipe(c)
})

server.listen(9293, function() {
    console.log('listen at localhost:9293');
})
