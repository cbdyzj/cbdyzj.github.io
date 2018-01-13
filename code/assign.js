function assign(target, source) {
    const t = o =>
        !Number.isNaN(o)
        && o !== undefined
        && o !== null
        && o !== ''
    Object.entries(source)
        .filter(s => t(s[1]))
        .forEach(s => target[s[0]] = s[1])
    return target
}

if (require.main === module) {
    console.log(assign({}, {
        a: 1,
        b: NaN,
        c: Infinity,
        d: [1],
        e: { foo: 'foo' },
        f: null,
        g: undefined,
        h: 0,
        i: '',
    }))
}