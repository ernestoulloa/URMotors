class Auto {
    id;
    model;
    year;
    brand;
    description;
    image;
    price;

    constructor(data) {
        this.id = data.id;
        this.model = data.model;
        this.year = data.year;
        this.image = data.image;
        this.brand = data.brand;
        this.price = data.price;
        this.description = data.description;
    }

    // Metodo, es una funcion especifica para los objetos de la clase Auto
    mostrarNombre(){
        return `${this.brand}-${this.model}-${this.year}`;
    }
}