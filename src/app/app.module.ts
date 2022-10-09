import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteService } from './services/cliente.service';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
