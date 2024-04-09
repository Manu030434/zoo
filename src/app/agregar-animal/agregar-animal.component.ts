import { Component, EventEmitter, Output } from '@angular/core';
import { animal } from '../interface/interface';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrl: './agregar-animal.component.css'
})
export class AgregarAnimalComponent {
  @Output() emisor= new EventEmitter<animal>();
  todoo: animal={
    nombre: " ",
    sexo: " "
    
  }
  emitirtodos(){
    this.emisor.emit({...this.todoo})
    this.todoo.nombre= " ",
    this.todoo.sexo= " "
  }

}
