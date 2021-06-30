class Ecommerce {
    constructor() {
        this.productos = [];
        this.carrito = [];
    };
    guardarProductos(producto) {
        producto.id = this.productos.length
        let fecha = new Date();
        producto.timeStamp = fecha.getTime();
        this.productos.push(producto)
        console.log(producto)
        return producto
    }
    listarProductos() {
        if (this.productos.length == 0) {
            return 0
        } else {
            return this.productos
        }
    }
    listarProductosID(id) {
        if (this.productos[id] != null) {
            return this.productos[id]
        } else {
            return 0
        }
    }
    actualizarProductos(idProd, product) {
        let result = this.listarProductosID(idProd)
        if (result == 0) {
            return 0
        } else {
            this.productos[idProd].nombre = product.nombre
            this.productos[idProd].precio = product.precio
            this.productos[idProd].foto = product.foto
            this.productos[idProd].codigo = product.codigo
            this.productos[idProd].descripcion = product.descripcion
            this.productos[idProd].stock = product.stock
            return this.productos[idProd]
        }
    }
    eliminarProductos(idProd) {
        let result = this.listarProductosID(idProd)
        if (result == 0) {
            return 0
        } else {
            delete this.productos[idProd]
            return result
        }
    }

    guardarEnCarrito(producto) {
        producto.id = this.carrito.length
        this.carrito.push(producto)
        console.log(producto)
        return producto
    }
    listarCarrito() {
        if (this.carrito.length == 0) {
            return 0
        } else {
            return this.carrito
        }
    }
    listarCarritoID(id) {
        if (this.carrito[id] != null) {
            return this.carrito[id]
        } else {
            return 0
        }
    }
    eliminarEnCarrito(idProd) {
        let result = this.listarCarritoID(idProd)
        if (result == 0) {
            return 0
        } else {
            delete this.carrito[idProd]
            return result
        }
    }
}
module.exports = new Ecommerce();