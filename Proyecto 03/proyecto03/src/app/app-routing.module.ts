import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoGComponent } from './vistas/pedido-g/pedido-g.component';
import { PrincipalComponent } from './vistas/principal/principal.component';


const routes: Routes = [
  { path: "pedido-g", component: PedidoGComponent },
  {path: "principal", component: PrincipalComponent},
  { path: "**", redirectTo: "principal" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
