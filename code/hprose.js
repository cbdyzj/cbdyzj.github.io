const hprose = require('hprose')

function hello(msg, callback) {
    console.log(msg)
    callback('pong')
}
// 服务端
const server = hprose.Server.create('http://0.0.0.0:7890');
server.addFunction(hello, { async: true })
server.start()

// 客户端
const client = hprose.Client.create('http://localhost:7890');
const proxy = client.useService();

setInterval(
    () => proxy.hello('ping', result => console.log(result)),
    1000,
)
