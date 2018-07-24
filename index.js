const LinReg = require('online-linear-regression')

function pVector (x, n) {
  let p = []
  for (let i = 1; i <= n; i++) {
    p.push(x ** i)
  }
  return p
}

module.exports = function (deg) {
  const lin = LinReg()
  if (typeof deg !== 'number' || deg < 1) {
    throw Error(`Degree of the fitting polynomial can't be less than 1`)
  }
  return function (x, y) {
    let params = []
    if (arguments.length && !isNaN(x)) {
      params.push(pVector((typeof x === 'number') ? x : parseFloat(x), deg))
      if (!isNaN(y)) {
        params.push((typeof y === 'number') ? y : parseFloat(y))
      }
    }
    return lin(...params)
  }
}
