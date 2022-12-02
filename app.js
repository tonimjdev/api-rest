'use strict'
// Separamos la funcionalidad de express en el archivo app.js

const express = require('express')
const app = express() // Creamos la APP de Express
const router = require('./routes') // Como el archivo es index.js no hace falta ponerlo

// Middlewares (capas)
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // Para parsear archivos JSON
app.use('/api', router) // Ruta base (endpoint)



module.exports = app
