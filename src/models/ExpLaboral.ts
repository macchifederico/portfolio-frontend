export class ExpLaboral 
{
    id?: number;
    nombreE?: String;
    empresaE?: String;
    descripcionE?: String;
    fecha_inicioE?: Date;
    fecha_finE?: Date;
    en_proceso?: Boolean;


    constructor(nombreE?: String, empresaE?: String, descripcionE?: String, fecha_inicioE?: Date, fecha_finE?: Date, en_proceso?: Boolean){
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.descripcionE = descripcionE;
        this.fecha_inicioE = fecha_inicioE;
        this.fecha_finE = fecha_finE;
        this.en_proceso = en_proceso;
    }

   
}