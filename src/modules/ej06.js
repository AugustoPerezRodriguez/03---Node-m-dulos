import fs from 'fs'

function generarCSV() {
    const productos = JSON.parse(fs.readFileSync('productos.json', 'utf8'));
    let csvContent = 'nombre,precio\n';
    productos.forEach(p => {
        csvContent += `${p.nombre},${p.precio}\n`;
    });
    
    fs.writeFileSync('productos.csv', csvContent);
    console.log('Archivo creado');
}

generarCSV();