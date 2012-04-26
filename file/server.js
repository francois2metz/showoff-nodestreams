var net = require('net')
var Stream = require('stream')

var chat = new Stream()

var server = net.createServer(function(c) {
    console.log('accepted connection')
    chat.pipe(c)
})

server.listen(9293, function() {
    console.log('listen at localhost:9293');
})

setInterval(function() {
    chat.emit('data', 'plop')
}, 1000);
