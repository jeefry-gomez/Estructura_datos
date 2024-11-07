/*
Crea una clase empleado con atributos nombre, salario y puesto y métodos para incrementar el salario y 
mostrar los datos del empleado.
*/

class Empleado {
    constructor(nombre, salario, area) {
        this.nombre = nombre;
        this.salario = salario;
        this.area = area;
    }

    incrementoSalario(incremento) {
        this.salario += incremento;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} Salario: ${this.salario} Puesto: ${this.area}`;
    }
}

let empleado = new Empleado('Gamarra', 5000000, 'Gerente');

console.log(empleado.mostrarDatos());

empleado.incrementoSalario(700000);

console.log(empleado.mostrarDatos());