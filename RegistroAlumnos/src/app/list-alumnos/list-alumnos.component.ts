import { Component, OnInit, Input ,HostBinding} from '@angular/core';
import { AlumnoModel } from './../models/alumno-model';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  @Input() alumno: AlumnoModel;
  
  @HostBinding('style.color') color = 'red';

  constructor() {
  	this.alumno = new AlumnoModel('','','','');
  }

  ngOnInit(): void {
  }


}
