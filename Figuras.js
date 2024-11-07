class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    areaRectangulo() {
    let area;
    area = 2 * (this.alto + this.ancho)
    return `El Area del rectangulo es de: ${area}`;    
    }

    perimetroRectangulo(){
        let perimetro;
        perimetro = 4*(this.ancho + this.alto);
        return `El perimetro del rectangulo es de: ${perimetro}`;
    }
}

let rectangulo = new Rectangulo(30, 50);

console.log(rectangulo.areaRectangulo());
console.log(rectangulo.perimetroRectangulo());