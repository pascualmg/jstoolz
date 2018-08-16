export default {
  generateRandomId: function generateRamdomId (seedStr) {
    const len = seedStr.length
    console.log('possibleStr', seedStr, ' len ', len)
    if (len <= 1) {
      return seedStr
    }
    const randomValidIndex = Math.floor(Math.random() * len)
    const randomChar = seedStr[randomValidIndex]
    const chunk1 = seedStr.slice(0, randomValidIndex)
    const chunk2 = seedStr.slice(randomValidIndex + 1)
    const possibleStrWithoutRandomChar = chunk1.concat(chunk2)

    return randomChar + generateRamdomId(possibleStrWithoutRandomChar)
  },
  inherits: function inherits (target, source) {
    for (var k in source.prototype)
      target.prototype[k] = source.prototype[k]
  }
}
