export class Proyecto 
{
    id?: number;
    nombreProyecto?: string;
    descrProyecto?: string;
    urlProyecto?: string;


    constructor(nombreProyecto?: string, descProyecto?: string, urlProyecto?: string){
        this.nombreProyecto = nombreProyecto;
        this.descrProyecto = descProyecto;
        this.urlProyecto = urlProyecto;
    }

   
}