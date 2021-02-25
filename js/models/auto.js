class Auto {
    id;
    model;
    year;
    brand;
    description;
    image;
    price;

    constructor(id, model, year, brand, price, description) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.description = description;
    }

    // Metodo, es una funcion especifica para los objetos de la clase Auto
    mostrarNombre(){
        return `${this.brand}-${this.model}-${this.year}`;
    }
}