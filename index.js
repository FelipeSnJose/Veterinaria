const { registrar, leer } = require('./utils/operaciones')
const args = process.argv.slice(2)

const operacion = args[0]

if (operacion === 'registrar') {
  const [, nombre, edad, tipo, color, enfermedad] = args
  registrar(nombre, edad, tipo, color, enfermedad)
} else if (operacion === 'leer') {
  leer()
} else {
  console.log('Uso: node index.js [registrar|leer] [args]')
}
