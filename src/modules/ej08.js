function analizarTexto(texto){
    const resultado = {
        caracteres: texto.length,
        palabras: 0,
        vocales: 0,
        consonantes: 0
    };
    const palabrasArray = texto.trim().split(/\s+/);
    resultado.palabras = palabrasArray[0] === "" ? 0 : palabrasArray.length;
    const vocales = "aeiou";
    for (let letra of texto.toLowerCase()) {
        if (/[a-z]/.test(letra)) { 
            if (vocales.includes(letra)) {
                resultado.vocales++;
            } else {
                resultado.consonantes++;
            }
        }
    }

    return resultado;
}

console.log(analizarTexto("Hola mundo"));