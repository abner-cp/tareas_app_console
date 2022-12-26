//const fs = require('fs');
import fs from 'fs';

const archivo = './db/data.json';

const guardarDB= ( data ) =>{

    fs.writeFileSync(archivo, JSON.stringify( data )); //convierte el arreglo (data) a string

}

const leerDB= () =>{

    if( !fs.existsSync( archivo )){ //verifica si existe el archivo
        return null;
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf8' } ); //lee el archivo como string y conf el encoding
    const data = JSON.parse( info ); //convierto el string a json
    console.log( data );
    return data;
}


export { guardarDB, leerDB };