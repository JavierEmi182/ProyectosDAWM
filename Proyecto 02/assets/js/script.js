let contAntes= 0
let contDespues= 0

let firstTime=false;

var fetchbtn= document.getElementById('fetch');
      fetchbtn.addEventListener('click',  (event) => {

            //resetear contador rec
      document.getElementById('contrec').innerHTML=0;

      let cont0 = document.getElementById('contrec').innerHTML
      console.log(contAntes)
      contAntes=contDespues
      let imgFetch= document.getElementsByClassName('imgFetch')
      //console.log(imgFetch)
      
      //console.log(lista)
      for (let i = 0; i < imgFetch.length; i++) {
            cargarDatos(imgFetch[i]);
            
            //let contInicio =document.getElementsByClassName('charts-css > tr')[i].split(';')[0]
            //console.log('prueba: ' +contInicio)
            //console.log(i)
            //console.log(document.getElementsByClassName('dato'))
            //contInicio=document.getElementsByClassName('dato')[i].getAttribute('style').split(':')[1].split(';')[0];
            //console.log(document.getElementsByClassName('dato')[i].getAttribute('style').split(':')[1].split(';')[0]);
      }

      
      /*console.log("antes")
      console.log(contAntes)
      console.log("despues")
      //console.log(contadorInicio)
      console.log(contDespues)

      let cont1 = document.getElementById('contrec').innerHTML

      */
      

      
      //mostrarDatos()
      
      console.log("otro dato")
      console.log(document.getElementsByClassName('dato'))
      contDespues=0;
});



let cargarDatos = (imgFetch) => {
      let url = 'https://random.dog/woof.json'
      fetch(url)
      .then((response) => response.text())
      .then((data) => {

                  const obj = JSON.parse(data);
                  console.log(obj);
                  //data sacar url
                  const imgURL = obj.url
                  console.log(imgURL) 
                  imgFetch.setAttribute("src",imgURL)
                  let extension = imgURL.split('.')[2].toUpperCase()
                  console.log(extension)
                  if(extension=='MP4'||extension=='WEBM'){
                        cargarDatos(imgFetch)
                        let cont = document.getElementById('contrec').innerHTML
                        cont++;
                        contDespues++;

                        document.getElementById('contrec').innerHTML=cont

                        
                        return
                  }

                  if(extension=='JPG'){
                        let cont = document.getElementById('contJPG').innerHTML
                        cont++;
                        document.getElementById('contJPG').innerHTML=cont
                  } else if(extension=='PNG'){
                        let cont = document.getElementById('contPNG').innerHTML
                        cont++;
                        document.getElementById('contPNG').innerHTML=cont
                  }else if(extension=='GIF'){
                        let cont = document.getElementById('contGIF').innerHTML
                        cont++;
                        document.getElementById('contGIF').innerHTML=cont
                  }else{
                        let cont = document.getElementById('contotros').innerHTML
                        cont++;
                        document.getElementById('contotros').innerHTML=cont
                  }

                  //document.getElementById('cont JPG')[0].innerHTML = `` 

      })
      //console.log(contDespues)
}
console.log("antes del filtrar")

var filtrarhbtn= document.getElementById('filtrar');
var flagFiltro= false;
//console.log(filtrarhbtn)

      filtrarhbtn.addEventListener('click', (event) => {
      if(flagFiltro==false){
            let imgFetch= document.getElementsByClassName('imgFetch')
            console.log(imgFetch)
            for (let i = 0; i < imgFetch.length; i++) {
                  //console.log(imgFetch[i])
                  if(imgFetch[i].getAttribute('src').split('.')[2].toUpperCase()!='GIF'){
                        imgFetch[i].style.visibility="hidden"
                  }
            }
            flagFiltro=true;
      }else{
            limpiarFiltro();
      }
      //mostrarDatos()
});

let limpiarFiltro = () => {
      let imgFetch= document.getElementsByClassName('imgFetch')
      for (let i = 0; i < imgFetch.length; i++) {
                  imgFetch[i].style.visibility="visible"

      }
}
//CARGAR GRAFICO LINEAS
var grafobtn= document.getElementById('grafo1');

grafobtn.addEventListener('click', (event) => {
      let plantillaRow = ``

      
            //let contInicio
            //console.log(document.getElementsByClassName('dato')[lista.length-1].getAttribute('style').split(':'))

            if(firstTime==false){
                  if(contDespues<9){
                        plantillaRow += `
                                    <tr>
                                        <td class="dato" style="--start: 0.0; --size: 0.0${contDespues}"> <span class="data"> ${contDespues} </span> </td>
                                    </tr>
                                    <tr>
                                        <td class="dato" style="--start: 0.0${contDespues}; --size: 0.0"> <span class="data">  </span> </td>
                                    </tr>
                                    `
                        firstTime=true
                  }else{
                        plantillaRow += `
                                    <tr>
                                        <td class="dato" style="--start: 0.0; --size: 0.${contDespues}"> <span class="data"> ${contDespues} </span> </td>
                                    </tr>
                                    <tr>
                                        <td class="dato" style="--start: 0.${contDespues}; --size: 0.0"> <span class="data">  </span> </td>
                                    </tr>
                                    `
                        firstTime=true
                  }
            }else{
            let lista=document.getElementsByClassName('dato')
            //console.log(lista)
            console.log(document.getElementsByClassName('dato')[lista.length-1])
            let contadorInicio=document.getElementsByClassName('dato')[lista.length-1].getAttribute('style').split(':')[2];
            console.log("contador inicio")
            console.log(contadorInicio)
            if(contDespues<9){
                  plantillaRow += `
                              <tr>
                                  <td class="dato" style="--start: 0.0${contadorInicio}; --size: 0.0${contDespues}"> <span class="data"> ${contDespues} </span> </td>
                              </tr>
                              <tr>
                                  <td class="dato" style="--start: 0.0${contDespues}; --size: 0.0"> <span class="data">  </span> </td>
                              </tr>
                              `
                  contadorInicio=contDespues;
            }else{
                  plantillaRow += `
                              <tr>
                                  <td class="dato" style="--start: 0.${contadorInicio}; --size: 0.${contDespues}"> <span class="data"> ${contDespues} </span> </td>
                              </tr>
                              <tr>
                                  <td class="dato" style="--start: 0.${contDespues}; --size: 0.0"> <span class="data">  </span> </td>
                              </tr>
                              `
                  contadorInicio=contDespues;
            }
      }

      document.getElementsByTagName('tbody')[0].innerHTML += plantillaRow

});
