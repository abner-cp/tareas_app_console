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

    borrarTarea( id= '' ) { //borrar tarea del objeto ls

        if( this._listado[id] ){
            delete this._listado[id];
        }
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

    listadasPendientesCompletadas( completadas= true ){ //LS de tareas completadas (true) o pendientes (false)
        
        let contador =0; //indice
        console.log();

        this.listadoArr.forEach( tarea =>{ 

            const { desc, completadoEn }= tarea; // se desestructura desde tarea (ciclo)
            const estado = ( completadoEn ) //ternario
                    ? 'Completada'.green 
                    : 'Pendiente'.red;
                if(completadas) { //necesita mostrar las completadas
                    if(completadoEn) { //el campo contiene algo
                        contador +=1;
                        console.log( `${ (contador + '.').green} ${ desc } :: ${ completadoEn.green }`); //imprime el listado
                    }
                } 
                else { //las pendientes
                    if( !completadoEn ) { //false =pendientes
                        contador+=1;
                        console.log( `${( contador + '.').green} ${ desc } :: ${ estado }`); //imprime el listado
                    }
                }
        });
    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id];
            if ( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => { // revertir completadas | pendientes
            if( !ids.includes( tarea.id ) ){
                this._listado[tarea.id].completadoEn= null; 
            }
        });
    }

}


export { Tareas };