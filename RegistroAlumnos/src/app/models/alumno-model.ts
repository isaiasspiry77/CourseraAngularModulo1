export class AlumnoModel {
	nombre:string;
	apellidos:string;
	matricula:string;
	carrera:string;

	constructor(n:string,a:string,mat:string,c:string){
		this.nombre=n;
		this.apellidos=a;
		this.matricula=mat;
		this.carrera=c;
	}
}
