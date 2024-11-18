import { Component } from '@angular/core';

@Component({
  selector: 'app-terror',
  standalone: true,
  imports: [],
  templateUrl: './terror.component.html',
  styleUrl: './terror.component.css'
})
export class TerrorComponent {

  // Método para abrir la ventana emergente
  abrirVentanaEmergente(url: string): void {
  window.open(url, 'popup', 'width=800,height=600');
  }

}
