import { Component } from '@angular/core';

@Component({
  selector: 'app-accion',
  standalone: true,
  imports: [],
  templateUrl: './accion.component.html',
  styleUrl: './accion.component.css'
})
export class AccionComponent {
  
  // Método para abrir la ventana emergente
  abrirVentanaEmergente(url: string): void {
  window.open(url, 'popup', 'width=800,height=600');
  }

}
