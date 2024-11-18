import { Component } from '@angular/core';

@Component({
  selector: 'app-deporte',
  standalone: true,
  imports: [],
  templateUrl: './deporte.component.html',
  styleUrl: './deporte.component.css'
})
export class DeporteComponent {

    // Método para abrir la ventana emergente
    abrirVentanaEmergente(url: string): void {
      window.open(url, 'popup', 'width=800,height=600');
    }

}


