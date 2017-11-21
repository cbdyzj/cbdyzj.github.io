const now = Math.round(new Date().getTime() / 1000)
const left = (2 ** 31 - now) / (3600 * 24 * 365)
console.log(left)
