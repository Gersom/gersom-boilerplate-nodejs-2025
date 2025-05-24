function checkInteger (valor, name = '') {
  // If it is a string and represents an integer
  if (typeof valor === 'string' && /^\d+$/.test(valor)) {
    return parseInt(valor, 10)
  }

  // If it is already an integer
  if (Number.isInteger(valor)) return valor

  // If not an integer, return error
  throw new Error(`\n*** ERROR ***\n${name || valor} should be an integer.`)
}

module.exports = checkInteger