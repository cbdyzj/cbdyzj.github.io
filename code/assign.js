function assign(target, source) {
    Object.entries(source)
        .filter(s => s[1] !== null && s[1] !== undefined && !Number.isNaN(s[1]))
        .forEach(s => target[s[0]] = s[1])
    return target
}
