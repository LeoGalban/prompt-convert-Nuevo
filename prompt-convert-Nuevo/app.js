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

//Bucle//
do { 
    //Menu de opciones//
    seleccionUsuario = parseInt(prompt("1) Convertir ARS a USD\n2) Ver historial\n3) Salir"));

    //Condicionales segun la opión selecionada//
    if (seleccionUsuario === 1) {
        //Si la opción del usuario es 1, Ingresa a la calculadora.

        //Prompt para ingresar el monto en ARS a convertir a USD" //
        montoARS = parseFloat(prompt("Introduce el monto en ARS para convertir a USD:"));
        
        if (montoARS >0 ) { //Verifica que el monto sea positivo//
            let resultadoUSD = convertirARSDolares(montoARS);
            alert("El monto es USD es: " + resultadoUSD.toFixed(2) + "USD");
            //Guarda la operación en el array de objetos//
            //Se guarda el tipo de operación, el monto de entrada (ARS), el monto de salida (USA) Y la fecha//
            historiasConversion.push({
                tipo: "Conversión",
                entrada: montoARS,
                salida: resultadoUSD.toFixed(2),
                fecha:new Date().toLocaleDateString() //fecha y hora de la conversión//
            });
        } else {
            alert("El monto debe ser mayor a 0.");
        }
    }else if (seleccionUsuario ===2) { 
        console.log("Historial de conversiones:");
        console.table(historiasConversion);
    } else if ( seleccionUsuario === 3) {
        alert("¡Hasta luego!");
    }else {
        alert("Opción no valida, por favor elige una opción valida.");
    } // Se guarda el tipo de operación, el monto de entrada (ARS), el monto de salida (USA) Y la fecha//
    
}while( decis);
