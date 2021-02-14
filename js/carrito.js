var carrito = JSON.parse(localStorage.getItem('carrito'));
if (!carrito) {
    carrito = [];
}

function eliminar(id) {
    for (let i = 0; i < carrito.length; i++) {
        let auto = carrito[i];
        if (auto.id == id) {
            carrito.splice(i, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            break;
        }
    }
}

function mostrarCarrito() {
    if (carrito.length > 0) {
        $('#badge').text(carrito.length);
        let cartItemsList = $('#cart-items');
        let suma = 0;
        cartItemsList.text('');
        for (let i = 0; i < carrito.length; i++) {
            let auto = carrito[i];
            suma += auto.price;
            let listItem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div class="cart-item-name">
                        <i class="fa fa-minus-circle" onclick="eliminar(${auto.id})"></i>
                        <h6 class="my-0">${auto.brand}-${auto.model}-${auto.year}</h6>
                    </div>
                    <span class="text-muted">$${auto.price} USD</span>
                </li>`;
            cartItemsList.append(listItem);
        }
        var totales = `<li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$${suma}</strong>
                </li>`;
        cartItemsList.append(totales);
    }
}

setInterval(function () {
    mostrarCarrito();
}, 1000);