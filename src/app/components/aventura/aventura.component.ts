import { Component } from '@angular/core';

@Component({
  selector: 'app-aventura',
  standalone: true,
  imports: [],
  templateUrl: './aventura.component.html',
  styleUrl: './aventura.component.css'
})
export class AventuraComponent {

  // Método para abrir la ventana emergente
  abrirVentanaEmergente(url: string): void {
  window.open(url, 'popup', 'width=800,height=600');
  }

}
