//const { inquirerMenu } = require('./helpers/inquirer');
import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js'

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
        case value:
            
            break;
       }

       guardarDB( tareas.listadoArr); //guarda en el archivo bd
       await pausa();


    } while (opt !== '0');

    
}

main();