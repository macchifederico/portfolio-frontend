export class Educacion 
{
    id?: number;
    titulo?: String;
    institucion?: String;
    fechaInicio?: Date;
    fechaFin?: Date;


    constructor(titulo?: String, institucion?: String, fechaInicio?: Date, fechaFin?: Date){
        this.titulo = titulo;
        this.institucion = institucion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

   
}