import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoGComponent } from './pedido-g/pedido-g.component';


const routes: Routes = [
  { path: "pedido-g", component: PedidoGComponent },
  { path: "**", redirectTo: "app" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
