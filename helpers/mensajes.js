

require('colors');

const mostrarMenu= () =>{

    return new Promise( resolve =>{ //se ocupa promesa para devolver la seleccion

        console.clear();
        console.log('============================='.green);
        console.log('Seleccione una opción'.green);
        console.log('=============================\n'.green);
    
        console.log(`${'1'.green}. Crear Tarea`);
        console.log(`${'2'.green}. Listar Tarea`);
        console.log(`${'3'.green}. Listar Tarea Completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(as)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir \n`);
        
        const readLine= require('readline').createInterface({ //paquete de node, interactuar con consola
            input: process.stdin, //entrada para el usuario (pausa app)
            output: process.stdout //salida, mostrar al usuario
        });
    
        readLine.question('Seleccione una opción: ', (opt) => { //para mostrar salida al usuario

            readLine.close();
            resolve( opt );
        });

    });
 
}

    const pausa =() =>{

        return new Promise( resolve =>{
            const readLine= require('readline').createInterface({ //interactuar con consola
                input: process.stdin,
                output: process.stdout
            });
        
            readLine.question('Presione tecla Enter para continuar: ', (opt) => {
                readLine.close();
                resolve();
            });
        });
      
    }


module.exports ={
    mostrarMenu, 
    pausa
}