!SLIDE 
# Node Streams
## François de Metz
## af83

!SLIDE
# Pipes for Node.js

!SLIDE bullets incremental
# Readable Stream

* 'data'
* 'end'
* 'close'

!SLIDE code small

    @@@ javascript
    var Stream = require('stream').Stream

    var stream = new Stream()
    stream.on('data', function(data) {
        console.log('Hey ! I got some new data: '+ data)
    })

!SLIDE bullets incremental
# Writable Stream

* write()
* end()

!SLIDE

    @@@ javascript
    source.pipe(dest)
    source.pipe(dest2)
    util.pump(source, dest)

!SLIDE bullets incremental
# Used in the standard library

* fs
* socket
* http request and response

!SLIDE
# Questions?
