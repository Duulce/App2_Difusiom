import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INICIOComponent} from '../app/COMPONENTES/PAGES/INICIO/inicio.component';
import {DATOSComponent} from '../app/COMPONENTES/PAGES/DATOS/datos.component';
import {GALERIAComponent} from '../app/COMPONENTES/PAGES/GALERIA/galeria.component';
import {MAPAComponent} from '../app/COMPONENTES/PAGES/MAPA/mapa.component';
import {DetallesComponent} from '../app/COMPONENTES/PAGES/DATOS/detalles/detalles.component';


const routes: Routes = [
  {path:'Inicio',component:INICIOComponent},
  {path:'Datos',component:DATOSComponent},
  {path:'Galeria',component:GALERIAComponent},
  {path:'Mapa',component:MAPAComponent},
  {path:'**',component:INICIOComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
