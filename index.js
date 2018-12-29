export default {
  idGenerator:
    /**
     * creates a generator of ids from n=bound to Max Save integer.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
     * if no params from n=1 to MAX_SAVE_INTEGER
     *
     * @param prefix text concatenated before the id. default nothing.
     * @param bound int to begin , default 1.
     *
     * @returns {IterableIterator<*>}
     */
    function idGenerator (prefix, bound) {
      var maxSaveInteger = Number.MAX_SAFE_INTEGER
      var createIdGenerator = function * () {
        var id = 1

        var prefix = ''
        if (typeof prefix !== 'undefined') {
          prefix = prefix
        }

        while (true && id < maxSaveInteger) {
          yield prefix.concat(id++)
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
  },
}
