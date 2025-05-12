//Variablles//
let seleccionUsuario; //almacena la eleccion del usuario //
let montoARS; //El valor en pesos que el usuario quiere convertir//
let tasaDeCambio = 1300; // tasa fija de conversión de ARS a USD (1 USD = 1300 ARS)
let historiasConversion = []; //array que guardara los detallesde las conversiones//

//Functiones//
function convertirARSDolares(montoARS) {
    if (montoARS > 0) {
        return montoARS / tasaDeCambio; // convierte ARS a USD//
    }
    return 0; // Si el monto es valido devuelve 0 //
}

