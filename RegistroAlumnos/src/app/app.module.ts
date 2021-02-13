import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ListAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
