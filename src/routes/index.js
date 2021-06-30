const express = require('express');
const router = express.Router();
const ecommerceController = require('../controllers/ecommerceController');

// ADMIN //
const admin = true;
module.exports = () => {
    router.get('/productos/listar', ecommerceController.getProducts);
    router.get('/productos/listar/:id', ecommerceController.getOneProduct);
    router.post('/productos/agregar', (req, res) => {
        if (admin == true) {
            ecommerceController.saveProduct(req, res)
        } else {
            res.json({ error: -1, descripcion: 'ruta: /productos/agregar metodo: POST no autorizado' })
        }
    });
    router.put('/productos/actualizar/:id', (req, res) => {
        if (admin == true) {
            ecommerceController.updateProduct(req, res)
        } else {
            res.json({ error: -1, descripcion: 'ruta: /productos/actualizar metodo: PUT no autorizado' })
        }
    });
    router.delete('/productos/borrar/:id', (req, res) => {
        if (admin == true) {
            ecommerceController.deleteProduct(req, res);
        } else {
            res.json({ error: -1, descripcion: 'ruta: /productos/borrar metodo: DELETE no autorizado' })
        }

    });

    router.get('/carrito/listar', ecommerceController.getProductsCarrito);
    router.get('/carrito/listar/:id', ecommerceController.getOneProductCarrito);
    router.post('/carrito/agregar/:id', ecommerceController.saveProductCarrito);
    router.delete('/carrito/borrar/:id', ecommerceController.deleteProductCarrito);

    return router;
};