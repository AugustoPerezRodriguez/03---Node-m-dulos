function buscarProducto(nombre) {
    const productos = JSON.parse(fs.readFileSync('productos.json', 'utf8'));
    
    const encontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (encontrado) {
        console.log('Producto encontrado');
        console.log(`Nombre: ${encontrado.nombre}`);
        console.log(`Precio: ${encontrado.precio}`);
    } else {
        console.log('Producto no encontrado');
    }
}

buscarProducto("Mouse");