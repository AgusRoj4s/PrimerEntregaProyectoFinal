const ecommerce = require('../api/ecommerce');
const funciones = require('../util/index');
exports.getProducts = (req, res) => {
    let prod = ecommerce.listarProductos()
    if (prod == 0) {
        res.json({ error: 'no hay productos cargados' })
    } else {
        res.json(prod)
    }
};

exports.getOneProduct = (req, res) => {
    let prod = ecommerce.listarProductosID(req.params.id)
    if (prod == 0) {
        res.json({ error: 'producto no encontrado' })
    } else {
        res.json(prod)
    }
};

exports.saveProduct = (req, res) => {
    let prod = ecommerce.guardarProductos(req.body)
    console.log('elemento guardado')
    let listado = ecommerce.listarProductos();
    funciones.writeFile('./productos.txt', JSON.stringify(listado, null, '\t'));
    res.json(prod)
};

exports.updateProduct = (req, res) => {
    let prod = ecommerce.actualizarProductos(req.params.id, req.body)
    if (prod == 0) {
        res.json({ error: 'no se pudo actualizar el producto {ID Erroneo}' })
    } else {
        console.log('elemento actualizado')
        let listado = ecommerce.listarProductos();
        funciones.writeFile('./productos.txt', JSON.stringify(listado, null, '\t'));
        res.json(prod)
    }
};

exports.deleteProduct = (req, res) => {
    let prod = ecommerce.eliminarProductos(req.params.id)
    if (prod == 0) {
        res.json({ error: 'no se pudo eliminar el producto {ID Erroneo}' })
    } else {
        console.log('elemento eliminado')
        let listado = ecommerce.listarProductos();
        funciones.writeFile('./productos.txt', JSON.stringify(listado, null, '\t'));
        res.json(prod)
    }
};

exports.getProductsCarrito = (req, res) => {
    let prod = ecommerce.listarCarrito()
    if (prod == 0) {
        res.json({ error: 'no hay productos cargados en el carrito' })
    } else {
        res.json(prod)
    }
};

exports.getOneProductCarrito = (req, res) => {
    let prod = ecommerce.listarCarritoID(req.params.id)
    if (prod == 0) {
        res.json({ error: 'producto no encontrado en el carrito' })
    } else {
        res.json(prod)
    }
};

exports.saveProductCarrito = (req, res) => {
    let prod = ecommerce.listarProductosID(req.params.id)
    console.log(prod)
    if (prod == 0) {
        res.json({ error: 'id erroneo de producto' })
    } else {
        let result = ecommerce.guardarEnCarrito(prod)
        console.log('elemento agregado al carrito')
        let listado = ecommerce.listarCarrito();
        funciones.writeFile('./carrito.txt', JSON.stringify(listado, null, '\t'));
        res.json(result)
    }
};

exports.deleteProductCarrito = (req, res) => {
    let prod = ecommerce.eliminarEnCarrito(req.params.id)
    if (prod == 0) {
        res.json({ error: 'no se pudo eliminar el producto {ID Erroneo}' })
    } else {
        console.log('elemento eliminado del carrito')
        let listado = ecommerce.listarCarrito();
        funciones.writeFile('./carrito.txt', JSON.stringify(listado, null, '\t'));
        res.json(prod)
    }
};