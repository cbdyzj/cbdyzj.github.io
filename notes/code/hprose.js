const hprose = require('hprose')

function hello(name, callback) {
    console.log('ping')
    callback('pong')
}
// 服务端
const server = hprose.Server.create('http://0.0.0.0:7890');
server.addAsyncFunction(hello)
server.start()

// 客户端
const client = hprose.Client.create('http://127.0.0.1:7890');
const proxy = client.useService();

setInterval(() => {
    proxy.hello('world', result => console.log(result))
}, 1000)