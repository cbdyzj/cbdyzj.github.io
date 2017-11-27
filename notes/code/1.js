
// 父集含子集
const setContains = (set, subset) => subset.every(e => set.includes(e))

// 暂停函数
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

