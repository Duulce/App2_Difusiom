import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './COMPONENTES/NAVBAR/navbar.component';
import { INICIOComponent } from './COMPONENTES/PAGES/INICIO/inicio.component';
import { GALERIAComponent } from './COMPONENTES/PAGES/GALERIA/galeria.component';
import { DATOSComponent } from './COMPONENTES/PAGES/DATOS/datos.component';
import { MAPAComponent } from './COMPONENTES/PAGES/MAPA/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    INICIOComponent,
    GALERIAComponent,
    DATOSComponent,
    MAPAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
