import { Tarea } from "./tarea.js";

class Tareas {

    _listado = {}; //listado de tareas como objeto

    get listadoArr() { //retorna un Arr con las llaves de _listado (objeto)
        const listado = [];
        Object.keys(this._listado).forEach( key => { //entrega un Arr con las llaves y lo recorre

            const tarea = this._listado[key]; //guarda la tarea en una constante
            listado.push(tarea); //guarda la tarea al arreglo final
        });

        return listado;
    }

    constructor(){
        this._listado= {};
    }

    crearTarea( desc= '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea; //las llaves cuadradas apuntan a una propiedad del objeto
    }

}


export { Tareas };