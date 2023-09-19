import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GALERIAComponent} from '../app/COMPONENTES/PAGES/GALERIA/galeria.component';
import {INICIOComponent} from '../app/COMPONENTES/PAGES/INICIO/inicio.component';
import {MAPAComponent} from '../app/COMPONENTES/PAGES/MAPA/mapa.component';


const routes: Routes = [

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
