import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  fotos: Foto[]= [];
  extensiones: string[]=[];
  constructor(private recursosService: RecursosService) {
 
  }
  async ngOnInit(){
    //let extension = this.recursosService.method_get().then(res=>{res.string.split('.')[2].toUpperCase()})
    await this.recursosService.method_get().then(res=>{this.fotos.push(res)});
    this.extensiones.push(this.recursosService.extension)
    console.log(this.fotos)
   // console.log(extension)
  }
}
