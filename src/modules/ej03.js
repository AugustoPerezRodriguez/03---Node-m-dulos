function mostrarFechaHora() {
    const hoy = require('dayjs');
    console.log(`Fecha actual: ${hoy.format('DD/MM/YYYY')}`);
    console.log(`Hora actual: ${hoy.format('HH:mm')}`);
}

mostrarFechaHora();