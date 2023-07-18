export class Acercade 
{
    id?: number;
    id_persona?: number;
    presentProf?: String;


    constructor(presentProf?: String, id_persona?: number){
        this.presentProf= presentProf;
        this.id_persona= id_persona;
    }
}