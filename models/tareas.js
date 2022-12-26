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

    cargarTareasFromArray( tareas = []) {

        tareas.forEach( tarea => {
            this._listado[tarea.id]= tarea;
        })
    }

    crearTarea( desc= '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea; //las llaves cuadradas apuntan a una propiedad del objeto
    }

    listadoCompleto(){ //listar las tareas con el get
        
        this.listadoArr.forEach( (tarea, i) =>{ //recorro el array, el segundo parametro es el indice

            const idx = `${i+1}`.green;
            const { desc, completadoEn }= tarea; // se desestructura desde tarea (ciclo)
            const estado = ( completadoEn ) //ternario
                    ? 'Completada'.green 
                    : 'Pendiente'.red;
            console.log( `${ idx } ${ desc } :: ${ estado }`); //imprime el listado
        });

    }

}


export { Tareas };