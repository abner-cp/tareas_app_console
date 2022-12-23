//const { v4: uudiv4} = require('uuid'); //id unica 
import { v4 as uuidv4 } from 'uuid'; //id unica

class Tarea {
    id= '';
    desc = '';
    completadoEn= null;

    constructor( desc ) {

        this.id = uuidv4();
        this.desc= desc;
        this.completadoEn= null;
    }

}

export { Tarea };