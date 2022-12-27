import { Component,OnInit } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.css']
})
export class ContadoresComponent implements OnInit  {
  contPNG:number=0;
  contJPG:number=0;
  contGIF:number=0;
  contotros:number=0;

  extensiones: string[]=[];
  fotos: Foto[]=[];

  constructor(private recursosService: RecursosService) {
 
  }

  async ngOnInit(){
    for(let i=0;i<6;i++){
      await this.recursosService.method_get().then(res=>{this.fotos.push(res)});
      this.extensiones.push(this.recursosService.extension)
      console.log(this.fotos)
      
      await this.extensiones.forEach(extension => {
        if(extension=='PNG'){
          this.contPNG++
        }else if (extension=='JPG') {
          this.contJPG++
        }else if (extension=='GIF'){
          this.contGIF++
        }
         else {
          this.contotros++
        }
        
      });
    }
  }
}
