let autos;

function mostrarCard(auto) {
    const readmore = `<a href="./views/details.html?id=${auto.id}">...</a>`;
    const descritption = auto.description.length > 120 ? auto.description.substring(0, 117) + readmore : auto.description;
    const html = `<div class="card cardMargin" style="width: 18rem;"> 
        <img class="card-img-top" src="${auto.image}" alt="Card image cap"> 
        <div class="card-body"> 
        <h5 class="card-title">
                <a href="./views/details.html?id=${auto.id}" >${auto.mostrarNombre()}</a> 
        </h5> 
        <h6>$${auto.price} USD</h6> 
        <p class="card-text">${descritption}</p> <a href="#" class="btn btn-primary" onclick="addToCart(${auto.id})">Añadir al carrito</a> 
        </div> 
        </div>`;
    $("#cardContainer").append(html);
}

function addToCart(id) {
    let foundAuto;
    for (let i = 0; i < autos.length; i++) {
        if (autos[i].id === id) {
            foundAuto = autos[i];
            break;
        }
    }
    addItem(foundAuto);
    mostrarCarrito();
}

$(function () {
    $.get("https://my.api.mockaroo.com/auto.json?key=c50140e0", function (data) {
        autos = [];
        for (let position = 0; position < data.length; position++) {
            const auto = new Auto(data[position]);
            autos.push(auto);
            mostrarCard(auto);
        }
    });
});
