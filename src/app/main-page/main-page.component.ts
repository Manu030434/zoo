import { Component } from '@angular/core';
import { animal } from '../interface/interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public animales: animal[]=[
    {
      nombre: "prueba",
      sexo: "esto es una prueba"
    },

  ]

  agregarAnimal(todoo:animal){
    this.animales.push(todoo)
  }

  public newmasc= this.animales.map((x)=> x.sexo=="masculino")
  public newfem= this.animales.map((x)=> x.sexo=="femenino")
}
