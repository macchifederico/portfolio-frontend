export class Educacion 
{
    id?: number;
    titulo?: String;
    institucion?: String;
    fechaInicio?: String;
    fechaFin?: String;


    constructor(titulo?: String, institucion?: String, fechaInicio?: String, fechaFin?: String){
        this.titulo = titulo;
        this.institucion = institucion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

   
}