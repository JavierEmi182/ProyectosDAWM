import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, timeInterval } from 'rxjs';
import { Foto } from '../interfaz/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  //fotos: any[] = [];
  extension:string ='';
  constructor(private http: HttpClient) { 
    //this.fotos = await this.method_get();
    //console.log(this.method_get())
  }
/*
  private async getServices(){
    const getTypeUrl= 'https://random.dog/woof.json';
    const sleep = (ms:any) => new Promise(r => setTimeout(r, ms));
    
    this.http.get(getTypeUrl).subscribe((data:any)=>{
      this.fotos =data as string[];
      console.log(data);
    });
    console.log(1)
    await sleep(5000);
    console.log(2)
    
  }*/

  async method_get(){
    return await new Promise<any>((resolve,reject)=>{
      this.http
      .get('https://random.dog/woof.json')
      .subscribe((res)=>{
        if (res instanceof HttpErrorResponse)
          reject({error:res.error,status:res.status});
        else 
          //console.log(JSON.stringify(res))
          this.extension = (JSON.stringify(res)).split('.')[2].toUpperCase().slice(0,3);
          console.log(this.extension)
          resolve(res)
      });
     
    })
    
  }

  obtenerDatos() {
    
    //console.log(this.http.get('https://random.dog/woof.json'))
    return this.http.get('https://random.dog/woof.json')
  }
}
