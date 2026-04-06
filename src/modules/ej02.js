import fs from 'fs';

function agregarProducto(nombre, precio) {
    try {
        const contenido = fs.readFileSync('productos.json', 'utf-8');
        const productos = JSON.parse(contenido);
        const nuevoProducto = { nombre, precio };
        productos.push(nuevoProducto);
        fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
        console.log("Producto agregado correctamente");

    } catch (error) {
        console.error("Error:", error);
    }
}
agregarProducto("Monitor", 120000);