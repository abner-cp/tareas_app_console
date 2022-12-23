//const inquirer = require('inquirer'); //paquete para trabajar por consola
import inquirer from 'inquirer'; //paquete para trabajar por consola
import colors from 'colors';

const preguntas = [ //arr menu principal
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear Tarea`
            },

            {
                value: '2',
                name: `${'2'.green}. Listar Tarea`
            },

            {
                value: '3',
                name: `${'3'.green}. Listar Tarea Completadas`
            },

            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
            },

            {
                value: '5',
                name: `${'5'.green}. Completar tarea(as)`
            },

            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`
            },
        ]
    }
];



const inquirerMenu = async () => { //funcion menu
    console.clear();

    console.log('============================='.green);
    console.log('Seleccione una opción'.white);
    console.log('=============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas); //devuelve la respuesta del usuario
    return opcion;
}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput= async ( message ) => {

    const question = [ //data para el inquirer
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0){
                    return 'por favor, ingrese un valor.'
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt( question ); //desestructura solo la descripcion
    return desc;
}



export {
    inquirerMenu,
    pausa,
    leerInput
};