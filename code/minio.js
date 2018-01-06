const { Client } = require('minio')
const { promisify } = require('util')

const client = new Client({
    endPoint: 'localhost',
    port: 9000,
    secure: false,
    accessKey: 'access_key',
    secretKey: 'secret_key',
})

async function main() {
    const bucketName = 'foo'
    // 判断存在并创建
    try {
        await client.bucketExists(bucketName)
    } catch (error) {
        if (error.code === 'NoSuchBucket') {
            await client.makeBucket(bucketName, 'cn-north-1')
        }
    }
    // 显示Buckets
    const list = await client.listBuckets()
    await client.putObject('foo', 'foo.txt', new Date().toString())
    const dataStream = await client.getObject('foo', 'foo.txt')
    dataStream.on('data', chunk => console.log(chunk.toString()))
}

if (require.main === module) {
    main().catch(error => console.error(error.code))
}
