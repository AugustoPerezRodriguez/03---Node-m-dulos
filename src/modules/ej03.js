import dayjs from 'dayjs';

function mostrarFechaHora() {
    const hoy = dayjs(); 

    console.log(`Fecha actual: ${hoy.format('DD/MM/YYYY')}`);
    console.log(`Hora actual: ${hoy.format('HH:mm')}`);
}

mostrarFechaHora();