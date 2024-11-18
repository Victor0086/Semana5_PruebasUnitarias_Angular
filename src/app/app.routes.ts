import { Routes } from '@angular/router';
import { AccionComponent } from './components/accion/accion.component';
import { AventuraComponent } from './components/aventura/aventura.component';
import { DeporteComponent } from './components/deporte/deporte.component';
import { IndexComponent } from './components/index/index.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TerrorComponent } from './components/terror/terror.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'accion', component: AccionComponent },
  { path: 'aventura', component: AventuraComponent },
  { path: 'deporte', component: DeporteComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terror', component: TerrorComponent },
];
