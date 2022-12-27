import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoGComponent } from './vistas/pedido-g/pedido-g.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { MenuComponent } from './menu/menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GrafExtenComponent } from './vistas/graf-exten/graf-exten.component';
import { ContadoresComponent } from './vistas/contadores/contadores.component';

@NgModule({
  
  declarations: [
    AppComponent,
    PedidoGComponent,
    PrincipalComponent,
    MenuComponent,
    GrafExtenComponent,
    ContadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
