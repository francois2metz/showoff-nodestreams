!SLIDE
# Node Streams
## François de Metz
## Stormz

!SLIDE
# Readable Stream

!SLIDE
# Writable Stream

!SLIDE code small

    @@@ javascript
    var http = require('http')

    http.get({host: 'localhost',
              port: 9292}, function(res) {
        res.on('data', function(data) {
            process.stdout.write(data)
        })
    })

!SLIDE code small

    @@@ javascript
    var http = require('http')

    http.get({host: 'localhost',
              port: 9292}, function(res) {
        res.pipe(process.stdout)
    })

!SLIDE code small

    @@@ javascript
    var http = require('http')
    var fs = require('fs')

    var file = fs.createWriteStream('/tmp/output')

    http.get({host: 'localhost',
              port: 9292}, function(res) {
        res.pipe(file)
    })

!SLIDE code small

    @@@ javascript
    var net = require('net')
    var Stream = require('stream')

    var stream = new Stream()
    setInterval(function() {
        stream.emit('data', 'plop\n')
    }, 1000)

!SLIDE code small

    @@@ javascript
    var server = net.createServer(function(c) {
        console.log('accepted connection')
        stream.pipe(c)
    })

    server.listen(9293, function() {
        console.log('listen at localhost:9293')
    })

!SLIDE code small small

    @@@ javascript
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
        chat.pipe(c)
        c.pipe(chat)
    })
    server.listen(9293, function() {
        console.log('listen at localhost:9293')
    })

!SLIDE
# Questions?
