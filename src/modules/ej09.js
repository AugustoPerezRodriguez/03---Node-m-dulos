function validarPassword(password) {
    const tieneMinimo = password.length >= 8;
    const tieneNumero = /\d/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password); 

    if (tieneMinimo && tieneNumero && tieneMayuscula) {
        console.log("Password válida");
    } else {
        console.log("Password inválida");
    }
}
validarPassword("Hola1234");
validarPassword("hola123");
validarPassword("HOLAaaaa");