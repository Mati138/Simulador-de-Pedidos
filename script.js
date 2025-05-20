// Traemos de localStorage el pedido si es que hay
const pedido = JSON.parse(localStorage.getItem("pedido")) || [];

// Se muestra el resumen 
mostrarResumen();

// Funcion para sumar el pedido al resumen y guardarlo en localStorage
function agregarPedido(nombre, precio) {
    const producto = pedido.find(pizza => pizza.nombre === nombre);
    if (producto) {
        producto.cantidad++;
    } else {
        pedido.push({ nombre, precio, cantidad: 1 });
    }

    // Se guarda en localStorage
    localStorage.setItem("pedido", JSON.stringify(pedido));
    mostrarResumen();
}

// Funcion para mostrar y calcular los valores del pedido.
function mostrarResumen() {
    const resumen = document.querySelector(".resumen-pedido");
    // Limpia el contenido para que no se repita cada vez que se agregue un pedido.
    resumen.innerHTML = "<h2>Resumen del pedido</h2>";

    if (pedido.length === 0) {
        resumen.innerHTML += "<p>No hay productos en el pedido.</p>";
        return;
    }

    let total = 0; // Dinero total
    pedido.forEach((item, index) => {
        resumen.innerHTML += ` 
            <div class="resumen-pedido-elemento">
                <p>${item.cantidad} x ${item.nombre} - $${item.precio * item.cantidad}</p>
                <button onclick="eliminarProducto(${index})">
                    <img src="./assets/imgs/delete.svg" alt="borrar">
                </button>
            </div>
        `;
        total += item.precio * item.cantidad;
    });

    resumen.innerHTML += `<p class="precio">Total: $${total}</p>`;
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    if (pedido[index].cantidad > 1) {
        pedido[index].cantidad--;
    } else {
        pedido.splice(index, 1); // Eliminar producto
    }
    // Guardamos en local storage el pedido sin los productos eliminados.
    localStorage.setItem("pedido", JSON.stringify(pedido));
    mostrarResumen();
}