const pizzas = {
    "muzzarella":{
        tipo:"muzzarella",
        precios:{
            chica: 3500,
            mediana: 4500,
            grande: 5500
        },
        ingredientes: "Salsa de tomate, muzzarella y orégano.",
    },
    "napolitana":{
        tipo:"napolitana",
        precios:{
            chica: 4000,
            mediana: 5000,
            grande: 6000
        },
        ingredientes: "Salsa de tomate, muzzarella, rodajas de tomate, ajo y orégano.",
    },
    "fugazzeta":{
        tipo:"fugazzeta",
        precios:{
            chica: 3800,
            mediana: 4800,
            grande: 5800
        },
        ingredientes: "Salsa de tomate, muzzarella, cebolla y orégano.",
    },
    "calabresa": {
        tipo:"calabresa",
        precios:{
            chica: 4200,
            mediana: 5200,
            grande: 6200
        },
        ingredientes: "Salsa de tomate, muzzarella, longaniza calabresa y orégano.",
    },
    "champiñones":{
        tipo:"champiñones",
        precios:{
            chica: 4500,
            mediana: 5500,
            grande: 6500
        },
        ingredientes: "Salsa de tomate, muzzarella, champiñones salteados y orégano.",
    },

};

alert("Hola bienvenido a tu pizzeria favorita!")

// Función que se encarga de la selección de la variedad de la pizza
const seleccionarVariedad = () => {
    let variedadSeleccionada = prompt("Elegí una variedad de pizza de las que tenemos: Muzzarella, Napolitana, Fugazzeta, Calabresa o Champiñones.");

    // Si se apreta cancelar
    if (variedadSeleccionada === null) {
        alert("Cuando decidas qué pedir, recargá la página!");
        return; // Termina la función si el usuario cancela
    }

    // Eliminamos espacios y pasamos todo a minúsculas
    let nombreDeVariedad = variedadSeleccionada.trim().toLowerCase();

    // Verificamos que no este vacío
    if (nombreDeVariedad === "") {
        alert("No escribiste nada, por favor elegí una pizza.");
        return seleccionarVariedad(); // Vuelvo a llamar la función si no ingresa nada
    }

    // Verificamos de que la variedad existe en el objeto pizzas
    if (nombreDeVariedad in pizzas) {
        return nombreDeVariedad; // Devuelvo la variedad si es válida
    } else {
        alert("Esa variedad no está disponible. Elegí una de las opciones que ofrecemos.");
        return seleccionarVariedad(); // Vuelvo a llamar la función si no es válida
    }
};
 
// Función que se encarga de la selección del tamaño de la pizza
const seleccionarTamano = variedad => {
    const precios = pizzas[variedad].precios;
    const tamanoSeleccionado = prompt(`La ${variedad} sale $${precios.chica} la chica, $${precios.mediana} la mediana y $${precios.grande} la grande. ¿Cuál querés?`);

    // Si se apreta cancelar
    if (tamanoSeleccionado === null) {
        alert("Cuando decidas qué pedir, recargá la página!");
        return;
    }

    // Eliminamos espacios y pasamos todo a minúsculas
    let nombreDeTamano = tamanoSeleccionado.trim().toLowerCase();

    // Verificamos que no esté vacío
    if (nombreDeTamano === "") {
        alert("No escribiste nada, por favor elegí el tamaño de la pizza.");
        return seleccionarTamano(variedad); 
    }

    // Verificamos que el tamaño exista en el objeto de precios
    if (nombreDeTamano in precios) { 
        return nombreDeTamano;
    } else {
        alert("Este tamaño no está disponible. Elegí una de las opciones que ofrecemos.");
        return seleccionarTamano(variedad); 
    }
};

// Función que se encarga de la parte del cobro
const cobrar = (precioFinal) => {
    const dineroCliente = prompt(`¿Con cuánto querés pagar? El total es $${precioFinal}`);

   // Si se apreta cancelar
    if (dineroCliente === null) {
        alert("Cancelaste el pago. Recargá la página si querés hacer un pedido.");
        return;
    }
    // Convertimos el texto a un número
    const dinero = Number(dineroCliente);

    // Verificamos si es un número y que este no sea negativo
    if (isNaN(dinero) || dinero < 0) {
        alert("No ingresaste un monto válido.");
        return cobrar(precioFinal);
    }

    // Restamos el precio final con el dinero ingresado para verificar si el pago es correcto o no
    if (dinero < precioFinal) {
        const faltante = precioFinal - dinero;
        alert(`Te falta $${faltante} para completar el pago.`);
        return cobrar(precioFinal); 
    } else if (dinero > precioFinal) {
        const vuelto = dinero - precioFinal;
        alert(`¡Gracias por tu compra! Tu vuelto es $${vuelto}.`);
    } else {
        alert("¡Gracias por tu compra!");
    }
};


function pedirPizzas() {
    const variedad = seleccionarVariedad();
    alert(`Esta pizza tiene ${pizzas[variedad].ingredientes}`)
    const dimension =  seleccionarTamano(variedad);
    const precioFinal = pizzas[variedad].precios[dimension];
    alert(`El precio final de tu pizza ${variedad} tamaño ${dimension} es $${precioFinal}.`);
    cobrar(precioFinal)
}

pedirPizzas()


