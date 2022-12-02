'use strict'
// Pasamos todas las peticiones a la api como funciones en archivo product.js
// Importamos el modelo Product
const Product = require('../models/product')
// Funcion GET (devuelve info de 1 producto por ID)
function getProduct (req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
      if (!product) return res.status(404).send ({message: `El producto no existe`})
  
      res.status(200).send({ product })
    })
}
// Función GET (devuelve info de todos los productos)
function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`})
        if (!products) return res.status(404).send ({message: `No existen productos`})
        
        res.status(200).send({products})
        })
}
// Función POST (añade nuevo producto a la DB)
function saveProduct (req, res) {
    console.log('POST /api/product')
    console.log(req.body)
  
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
  
    product.save((err, productStored) => {
      if (err) res.status(500).send({message: `Error al guardar en DB: ${err}`})
  
      res.status(200).send({product: productStored})
    })
}
// Función PUT (modifica información de 1 producto por ID)
function updateProduct (req, res) {
    let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto ${err}`})

    res.status(200).send({ product: productUpdated })
  } )
}
// Función DELETE (borra 1 producto por ID)
function deleteProduct (req, res) {
    let productId = req.params.productId

 Product.findById(productId, (err, product) => {
  if (err) res.status(500).send({message: `Error al borrar el producto ${err}`})
 
  product.remove(err => {
    if (err) res.status(500).send({message: `Error al borrar el producto ${err}`})
    res.status(200).send({message: `El producto ha sido eliminado`})
  })
 })
}
// Exportamos las funciones
module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}