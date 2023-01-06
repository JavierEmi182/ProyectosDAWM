import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-pedido-g',
  templateUrl: './pedido-g.component.html',
  styleUrls: ['./pedido-g.component.css']
})
export class PedidoGComponent implements OnInit{
  fotos: Foto[]= [];
  extensiones: string[]=[];

  constructor(private recursosService: RecursosService) {
 
  }

  async ngOnInit(){
    for(let i=0;i<21;i++){
      await this.recursosService.method_get().then(res=>{this.fotos.push(res)});
      this.extensiones.push(this.recursosService.extension)
      console.log(this.fotos)
      
    }
  }
}
