class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.siguienteTarea = null;
    }
}

class ListaTareas {
    constructor() {
        this.primeraTarea = null;
    }

    agregarTarea(descripcion) {
        const nuevaTarea = new Tarea(descripcion);
        if (!this.primeraTarea) {
            this.primeraTarea = nuevaTarea;
        } else {
            let tareaActual = this.primeraTarea;
        while (tareaActual.siguienteTarea) {
            tareaActual = tareaActual.siguienteTarea;
        }
        tareaActual.siguienteTarea = nuevaTarea;
        }
    }

    eliminarTarea(descripcion) {
      // Implementación del método para eliminar una tarea
    }

    mostrarTareas() {
        let tareaActual = this.primeraTarea;
        while (tareaActual) {
        console.log(tareaActual.descripcion);
        tareaActual = tareaActual.siguienteTarea;
        }
    }
    }

  // Crear una lista de tareas
    const lista = new ListaTareas();

  // Agregar tareas
    lista.agregarTarea("Actualizar el inventario");
    lista.agregarTarea("Realizar mantenimiento de salas de sistemas");
    lista.agregarTarea("consultar estado de los pedidos a los proveedores");

  // Mostrar las tareas
    lista.mostrarTareas();