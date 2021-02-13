import { Component, OnInit, Input } from '@angular/core';
import { AlumnoModel } from './../models/alumno-model';


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  alumnos: AlumnoModel[];

  constructor() {
  	this.alumnos=[];
  }

  ngOnInit(): void {
  }

  add(nombre:string, apellidos:string, matricula:string, carrera:string):boolean{
	this.alumnos.push(new AlumnoModel(nombre,apellidos,matricula,carrera));
	console.log(this.alumnos)  	

  	return false;
  }
}
