let carrito = JSON.parse(localStorage.getItem('carrito'));
if (!carrito) {
    carrito = [];
}

function saveCart() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminar(id) {
    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        if (item.auto.id == id) {
            if (carrito.length === 1)
                carrito = [];
            else
                carrito.splice(i, 1);
            saveCart();
            break;
        }
    }
}

function addItem(auto) {
    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        if (item.auto.id === auto.id) {
            item.cantidad += 1;
            saveCart();
            return;
        }
    }
    let item = new CartItem(auto, 1);
    carrito.push(item);
    saveCart();
}

function mostrarCarrito() {
    $('#badge').text(carrito.length);
    let cartItemsList = $('#cart-items');
    let suma = 0;
    cartItemsList.text('');
    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        suma += item.auto.price * item.cantidad;
        let listItem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div class="cart-item-name">
                        <i class="fa fa-minus-circle" onclick="eliminar(${item.auto.id})"></i>
                        <h6 class="my-0">${item.auto.brand}-${item.auto.model}-${item.auto.year} x ${item.cantidad}</h6>
                    </div>
                    <span class="text-muted">$${item.auto.price} USD</span>
                </li>`;
        cartItemsList.append(listItem);
    }
    var totales = `<li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$${suma}</strong>
                </li>`;
    cartItemsList.append(totales);
}

setInterval(function () {
    mostrarCarrito();
}, 1000);