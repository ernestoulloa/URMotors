const autos = [
    new Auto(1, 'Gol', 2020, 'VW', 15470, 'Volkswagen Gol 2020 cuenta con un motor ' +
        '1.6 litros de cuatro cilindros que da una potencia de 101 caballos de fuerza y un par máximo de 143 Nm, ' +
        'asociado a una caja manual o a una automática i-motion de 5 velocidades, dependiendo de la versión.'),
    new Auto(2, 'Tiguan', 2020, 'VW', 39990, 'Volkswagen Tiguan viene con un potente' +
        ' motor de combustión a nafta de 2.000 cc. turboalimentado, que eroga una potencia de 180 HP. Su transmisión ' +
        'puede ser manual de 6 marchas o automática de tipo Tiptronic también de 6 marchas. En ambos casos está equipado' +
        ' con el sistema 4Motion.'),
    new Auto(3, 'Nivus', 2020, 'VW', 26990, 'Nivus mide 4.266 milímetros de largo,' +
        ' 1.757 de ancho, 1.493 de altura y 2.566 de distancia entre ejes. El baúl tendrá una capacidad de 415 litros.' +
        ' Es un vehículo claramente más grande y espacioso que el Polo.'),
    new Auto(4, 'Alto', 2019, 'Suzuki', 8990, 'Suzuki Alto es un pequeño utilitario ' +
        'de segmento A de la marca japonesa, reemplazado a finales de 2014 por el Suzuki Celerio. Su carrocería mide ' +
        '3,5 metros de largo, 1,6 de ancho y 1,47 de alto. Está homologado para cuatro pasajeros y su maletero tiene un' +
        ' volumen de 129 litros.'),
    new Auto(5, 'Baleno', 2020, 'Suzuki', 17990, 'Suzuki Baleno cuenta con un motor ' +
        'de 4 cilindros ' +
        'de 1400 cc DOHC 16 válvulas VVT. Potencia 94 HP (95 CV) / 6000 rpm. Torque 130Nm / 4400 rpm. Transmisión manual ' +
        'de 5 velocidades (automática opcional).'),
    new Auto(6, 'A4', 2018, 'Audi', 59800, 'Audi A4 de carrocería sedán tiene unas ' +
        'dimensiones de 4,73 metros de largo, 1,84 de ancho y 1,43 metros de alto. La batalla se cifra en 2,82 metros, ' +
        'lo que le confiere unas plazas traseras cómodas en el espacio para las piernas. La capacidad del maletero es' +
        ' 480 litros.'),
    new Auto(7, 'Captur', 2021, 'Renault', 30990, 'La oferta de motores gasolina ' +
        'comprende un 1.0 TCe de 100 CV y un 1.3 TCe de 130 y 155 CV. Además de estos motores "convencionales", existe ' +
        'una variante bi-fuel GLP para el motor TCe de 100 CV y una variante híbrida enchufable E-TECH capaz de recorrer ' +
        'hasta 45 kilómetros (WLTP) en modo eléctrico gracias a una batería con 9,8 kWh de capacidad.'),
    new Auto(8, 'Yaris', 2021, 'Toyota', 20600, 'Toyota Yaris 2021 mantiene la misma' +
        ' plataforma proveniente del Yaris de hace más de una década, con ajustes para mantenerla vigente. El motor ' +
        'sigue siendo el conocido bloque de 1.5 litros de 107 hp y 104 lb-pie, con opción a transmisión manual de cinco' +
        ' velocidades o automática CVT.'),
];
// TODO crear vista detalle

//TODO animaciones cuando se le click a al img que se amplie con la opcion de cerrar en la x

//TODO esperar por ajax : tener una img oculta que aparezca luego de dar click por un tiempo y luego se oculte

function mostrarCard(auto) {
    const readmore = '<a href="views/details.html">...</a>';
    const descritption = auto.description.length > 120 ? auto.description.substring(0, 117) + readmore : auto.description;
    const html = `<div class="card cardMargin" style="width: 18rem;"> 
        <img class="card-img-top" src="${auto.image}" alt="Card image cap"> 
        <div class="card-body"> 
        <h5 class="card-title">${auto.mostrarNombre()}</h5> 
        <h6>$${auto.price} USD</h6> 
        <p class="card-text">${descritption}</p> <a href="#" class="btn btn-primary" onclick="addToCart(${auto.id})">Añadir al carrito</a 
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
    for (let position = 0; position < autos.length; position++) {
        const auto = autos[position];
        auto.image = `assets/cards/card${auto.id}.jpg`;

    }
    for (let i = 0; i < autos.length; i++) {
        mostrarCard(autos[i]);
    }
});
