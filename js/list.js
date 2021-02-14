var autos = [
    new Auto(1, 'Gol', 2020, 'VW', 15470),
    new Auto(2, 'Tiguan', 2020, 'VW', 39990),
    new Auto(3, 'Nivus', 2020, 'VW', 26990),
    new Auto(4, 'Alto', 2020, 'Susuki', 8990),
    new Auto(5, 'Baleno', 2020, 'Susuki', 17990),
    new Auto(6, 'A4', 2018, 'Audi', 59800),
];

function mostrarCard(auto) {
    var html = `<div class="card cardMargin" style="width: 18rem;"> 
        <img class="card-img-top" src="${auto.image}" alt="Card image cap"> 
        <div class="card-body"> 
        <h5 class="card-title">${auto.mostrarNombre()}</h5> 
        <h6>$${auto.price} USD</h6> 
        <p class="card-text">${auto.description}</p> <a href="#" class="btn btn-primary" onclick="addToCart(${auto.id})">Añadir al carrito</a 
        </div> 
        </div>`;
    $("#cardContainer").append(html);
}

function addToCart(id) {
    var foundAuto;
    for (var i = 0; i < autos.length; i++) {
        if (autos[i].id === id){
            foundAuto = autos[i];
            break;
        }
    }
    addItem(foundAuto);
    mostrarCarrito();
}

$(function () {
    for (var position = 0; position < autos.length; position++) {
        var auto = autos[position];
        auto.image = `assets/cards/card${auto.id}.jpg`;
        auto.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n' +
            '\n';
    }
    for (var i = 0; i < autos.length; i++) {
        mostrarCard(autos[i]);
    }
});
