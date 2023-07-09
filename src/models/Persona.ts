export class Persona 
{
    id?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    password?: string;
    imageUrl?: string;
    ocupacion?: string;
    urlLinkedin?: string;
    
    constructor(nombre?: string, apellido?: string, imageUrl?: string, acerca?: string, ocupacion?: string, urlLinkedin?: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imageUrl = imageUrl;
        this.ocupacion = ocupacion;
        this.urlLinkedin = urlLinkedin;
    }
}