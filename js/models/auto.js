class Auto {
    id;
    model;
    year;
    brand;
    description;
    image;

    constructor(id, model, year, brand) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.brand = brand;
    }

    // Metodo, es una funcion especifica para los objetos de la clase Auto
    mostrarNombre(){
        return `${this.brand}-${this.model}-${this.year}`;
    }
}