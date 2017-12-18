class Context {
    constructor(resolve, reject) {
        Object.assign(this, {
            _resolve: resolve,
            _reject: reject
        })
    }

    resolve(value) {
        this.value = value
        this._resolve(this)
    }

    reject(error) {
        this.error = error
        this._reject(this)
    }
}

function run(task, args) {
    return new Promise((resolve, reject) => task.apply(new Context(resolve, reject), args))
}
