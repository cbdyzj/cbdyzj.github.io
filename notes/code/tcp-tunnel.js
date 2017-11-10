const net = require('net')

function tunntlTcp(host, port) {
    const server = net.createServer(source => {
        const destination = net.connect({ host, port }, () => source.on('data', data => destination.write(data)))
        destination.on('data', data => source.write(data))

        destination.on('error', err => source.destroy())
        source.on('error', err => destination.destroy())
    })
    return { from: server.listen.bind(server) }
}

tunntlTcp('127.0.0.1', 8000).from(8080)