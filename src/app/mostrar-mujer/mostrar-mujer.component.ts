import { Component, Input } from '@angular/core';
import { animal } from '../interface/interface';

@Component({
  selector: 'app-mostrar-mujer',
  templateUrl: './mostrar-mujer.component.html',
  styleUrl: './mostrar-mujer.component.css'
})
export class MostrarMujerComponent {
  @Input() newfem: animal[]=[]

  
}
