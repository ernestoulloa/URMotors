const autos = [
    new Auto(1, 'Gol', 2020, 'VW', 15470),
    new Auto(2, 'Tiguan', 2020, 'VW', 39990),
    new Auto(3, 'Nivus', 2020, 'VW', 26990),
    new Auto(4, 'Alto', 2019, 'Susuki', 8990),
    new Auto(5, 'Baleno', 2020, 'Susuki', 17990),
    new Auto(6, 'A4', 2018, 'Audi', 59800),
    new Auto(7,'Bigster', 2021, 'Renault', 60500 ),
    new Auto(8, 'Yaris', 2021, 'Toyota', 20600),
];
// TODO cambiar la descriotion segun el auto

//TODO animaciones cuando se le click a al img que se amplie con la opcion de cerrar en la x

function mostrarCard(auto) {
    const html = `<div class="card cardMargin" style="width: 18rem;"> 
        <img class="card-img-top" src="${auto.image}" alt="Card image cap"> 
        <div class="card-body"> 
        <h5 class="card-title">${auto.mostrarNombre()}</h5> 
        <h6>$${auto.price} USD</h6> 
        <p class="card-text">${auto.description}</p> <a href="#" class="btn btn-primary" onclick="addToCart(${auto.id})">Añadir al carrito</a 
        </div> 
        </div>`;
    $("#cardContainer").append(html);
} //Todo linea 20 cuando se de click en añadir (una funcion que contenga un model que pregunte si realmente quiere añadir al carrito)

function addToCart(id) {
    let foundAuto;
    for (let i = 0; i < autos.length; i++) {
        if (autos[i].id === id){
            foundAuto = autos[i];
            break;
        }
    }
    addItem(foundAuto);
    mostrarCarrito();
}

$(function () {
    for (let position = 0; position < autos.length; position++) {
        const auto = autos[position];
        auto.image = `assets/cards/card${auto.id}.jpg`;
        auto.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n' +
            '\n';
    }
    for (let i = 0; i < autos.length; i++) {
        mostrarCard(autos[i]);
    }
});
