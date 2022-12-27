import { Component,OnInit } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-graf-exten',
  templateUrl: './graf-exten.component.html',
  styleUrls: ['./graf-exten.component.css']
})
export class GrafExtenComponent implements OnInit {
  contPNG:number=0;
  contJPG:number=0;
  contGIF:number=0;
  contotros:number=0;

  conttotal:number=0;

  extensiones: string[]=[];
  fotos: Foto[]=[];

  listaTags= ['JPG','GIF','PNG','Otros']

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
          this.conttotal++
        }else if (extension=='JPG') {
          this.contJPG++
          this.conttotal++
        }else if (extension=='GIF'){
          this.contGIF++
          this.conttotal++
        }
         else {
          this.contotros++
          this.conttotal++
        }
        
        console.log(this.contGIF)
        console.log(this.contJPG)
        console.log(this.contPNG)
        console.log(this.contotros)
      });
    }
  }
  
}
