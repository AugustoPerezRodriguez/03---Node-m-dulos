import fs from 'fs'

const contenido = fs.readFileSync('productos.json', 'utf-8')
    try {
        const productos = JSON.parse(contenido);

        console.log("Lista de productos:");
        productos.forEach((p, i) => {
            console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
        });

    } catch (error) {
        console.error('Error al parsear el JSON:', error);
    }