const { fork } = require('child_process')
const path = require('path')

async function main() {
    const cp = fork(path.join(__dirname, 'async_work'), ['work'])
}

async function work(args) {
    console.log(args)
}

if (require.main === module) {
    const args = process.argv.slice(2)
    if (!args.length) {
        main()
    } else {
        work(args)
    }
}

