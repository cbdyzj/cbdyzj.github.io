const now = Math.round(Date.now() / 1000)
const timeLeft = (2 ** 31 - now) / (3600 * 24 * 365)
console.log(timeLeft.toFixed(2) + '年')
