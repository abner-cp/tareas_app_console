//const { inquirerMenu } = require('./helpers/inquirer');
import colors from 'colors';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js'

import {Tareas} from './models/tareas.js';

//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = '';
    const tareas = new Tareas(); //instancia fija, antes del ciclo

    do {

       opt = await inquirerMenu(); //espera la promesa
        
       switch (opt) {
        case '1':
            //
            const desc = await leerInput('Descripción:');
            tareas.crearTarea( desc ); //crea la tarea y guarda en la lista
            break;
        case '2':
            console.log(tareas.listadoArr);
            break;
        case value:
            
            break;
       }

    await pausa();


    } while (opt !== '0');

}

main();