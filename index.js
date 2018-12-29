export default {
  idGenerator: function idGenerator () {
    var createIdGenerator = function * () {
      var id = 1
      while (true) {
        yield id++
      }
    }
    return createIdGenerator()
  },
  generateRandomId: function generateRamdomId (seedStr) {
    const len = seedStr.length
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
  },
  /**
   * inspired by https://stackoverflow.com/questions/35854795/load-external-javascript-through-script-tag
   * Carga un script externo en caliente.
   * Se carga en el HEAD
   * @param uri del script a cargar
   * @param onLoad callback para ejecutar una vez esté cargado el script.
   */
  loadScript: function loadScript (uri, onLoad) {
    var aScript = document.createElement('script')
    aScript.type = 'text/javascript'
    aScript.src = uri
    document.head.appendChild(aScript)
    aScript.onload = onLoad
  }
}
