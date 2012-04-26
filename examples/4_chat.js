var net = require('net')
var util = require('util')
var Stream = require('stream')

function Chat() {
    Stream.call(this)
    this.writable = this.readable = true
}
util.inherits(Chat, Stream)
Chat.prototype.write = function(data) {
    this.emit("data", data)
    return true
}

var chat = new Chat()

var server = net.createServer(function(c) {
    console.log('accepted connection')
    chat.pipe(c)
    c.pipe(chat)
})

server.listen(9293, function() {
    console.log('listen at localhost:9293');
})
