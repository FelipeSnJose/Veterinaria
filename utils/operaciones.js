const fs = require('fs')
const citasFile = 'citas.json'

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad
  }

  let citas = []

  try {
    const data = fs.readFileSync(citasFile, 'utf-8')
    citas = JSON.parse(data)
  } catch (error) {
  }

  citas.push(nuevaCita)

  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2))
  console.log('Cita registrada con éxito.')
}

const leer = () => {
  try {
    const data = fs.readFileSync(citasFile, 'utf-8')
    const citas = JSON.parse(data)
    if (citas.length === 0) {
      console.log('No hay citas registradas.')
    } else {
      console.log('Citas registradas:')
      citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}:`)
        console.log(`Nombre: ${cita.nombre}`)
        console.log(`Edad: ${cita.edad}`)
        console.log(`Tipo: ${cita.tipo}`)
        console.log(`Color: ${cita.color}`)
        console.log(`Enfermedad: ${cita.enfermedad}`)
        console.log('------------------------')
      })
    }
  } catch (error) {
    console.error('Error al leer el archivo de citas:', error)
  }
}

module.exports = { registrar, leer }
