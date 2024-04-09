import { Component, Input } from '@angular/core';
import { animal } from '../interface/interface';

@Component({
  selector: 'app-mostrar-hombre',
  templateUrl: './mostrar-hombre.component.html',
  styleUrl: './mostrar-hombre.component.css'
})
export class MostrarHombreComponent {
  @Input() newmasc: animal[]=[]

   
}
