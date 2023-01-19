//const { inquirerMenu } = require('./helpers/inquirer');
import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js'

import {Tareas} from './models/tareas.js';

//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = '';
    const tareas = new Tareas(); //instancia fija, antes del ciclo

    const tareasDB = leerDB();

    if (tareasDB) {
        //trabajar el arreglo con la clase tareas
        //función cargarTareas
        tareas.cargarTareasFromArray( tareasDB );
    }


    do {

       opt = await inquirerMenu(); //espera la promesa
        
       switch (opt) {
        case '1':
            //
            const desc = await leerInput('Descripción:');
            tareas.crearTarea( desc ); //crea la tarea y guarda en la lista
            break;
        case '2':
           tareas.listadoCompleto();
            break;
        case '3':
            tareas.listadasPendientesCompletadas(true);
            
            break;
        case '4':
            tareas.listadasPendientesCompletadas(false);
            break;
        case '5': //completado | pendiente
            const ids= await mostrarListadoChecklist( tareas.listadoArr );
            tareas.toggleCompletadas( ids );
            break;

        case '6': //listado borrar
            const id = await listadoTareasBorrar( tareas.listadoArr );  //envía el arr de tareas a la función y retorna ID
            if (id !== '0'){
                const ok = await confirmar('¿estás seguro?'); //msg de confirmación inquirer
                if( ok ){
                    tareas.borrarTarea( id ); //borra tarea
                    console.log('tarea borrada correctamente'.bgBlue);
                }
            }
            break;
       }

       guardarDB( tareas.listadoArr); //guarda en el archivo bd
       await pausa();


    } while (opt !== '0');


}

main();