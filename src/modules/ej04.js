import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function obtenerPais(nombrePais) {
    try {
        const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`);
        const pais = respuesta.data[0];

        console.log(`País: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital[0]}`);
        console.log(`Región: ${pais.region}`);
        console.log(`Población: ${pais.population}`);
    } catch (error) {
        console.log("Error al obtener el país");
        console.log(error.message);
    }
}

obtenerPais("argentina");