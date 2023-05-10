const names = require('./3-names')
const sayHi = require('./2-module')
const data = require('./4-alternative-flavor');

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.chief)
sayHi(names.ebube)
