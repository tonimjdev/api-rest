'use strict'
const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config(); // Para crear variables de entorno

const port = process.env.PORT || 4000

// Conexión a DB con mongoose
mongoose.connect(process.env.BD_CNN, (err, res) => {
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
      console.log("BD Online")

      app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
      })
    })

