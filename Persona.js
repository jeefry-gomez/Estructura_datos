class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    datosPersona(){
        return`Nombre: ${this.nombre}, Edad: ${this.edad} años.`;
    }

    personaAdulta(){
        if (this.edad >= 18){
            return `${this.nombre} es mayor de edad`;
        }else{
            return `${ this.nombre} es menor de edad`;
        }
    }
}
let persona = new Persona('Jeefry', 20);
console.log(persona)
console.log(persona.personaAdulta())