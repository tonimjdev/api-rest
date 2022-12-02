'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const router = express.Router()


// Creamos petición tipo GET (Para que el servidor nos envíe la info que le solicitamos)
// Creamos 2 peticiones una para todos los productos y otra para un producto en concreto
router.get('/product', productCtrl.getProducts)
router.get('/product/:productId', productCtrl.getProduct)
// Creamos petición tipo POST (Para registrar un nuevo producto en la DB)
router.post('/product', productCtrl.saveProduct)
// Creamos petición tipo PUT (Para actualizar algun dato de un producto ya subido a la DB)
router.put('/product/:productId', productCtrl.updateProduct)
// Creamos petición tipo DELETE (Para borrar un producto)
router.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = router