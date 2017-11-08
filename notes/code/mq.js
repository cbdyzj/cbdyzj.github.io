const mq = require('amqplib')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function consumer() {
    try {
        const conn = await mq.connect('amqp://localhost')
        const ch = await conn.createChannel()

        const q = 'hello'
        ch.assertQueue(q, { durable: false });
        ch.consume(q, msg => {
            console.log('from q: ', msg.content.toString())
        }, { noAck: true })
    } catch (err) {
        console.log(err)
    }
}

async function producer() {
    try {
        const conn = await mq.connect('amqp://localhost')
        const ch = await conn.createChannel()

        const q = 'hello'
        ch.assertQueue(q, { durable: false });

        while (true) {
            ch.sendToQueue(q, new Buffer('hello!'))
            console.log('send to q')
            await sleep(1000)
        }

    } catch (err) {
        console.log(err)
    }
}

consumer()
producer()
