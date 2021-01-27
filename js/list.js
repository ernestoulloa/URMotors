var autos = [
    new Auto(1,'Gol', 2019, 'VW'),
    new Auto(2,'Tiguan', 2020, 'VW'),
    new Auto(3,'Nivus', 2020, 'VW'),
    new Auto(4,'Alto', 2018, 'Susuki'),
    new Auto(5,'Baleno', 2019, 'Susuki'),
    new Auto(6,'A4', 2019, 'Audi'),
];

for (var position = 0; position < autos.length; position++) {
    var auto = autos[position];
    auto.image = `assets/cards/card${auto.id}.jpg`;
    auto.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n' +
        '\n';
}

function mostrar(posicion){
    alert(`Has dado click en el ${autos[posicion].mostrarNombre()}`);
}
