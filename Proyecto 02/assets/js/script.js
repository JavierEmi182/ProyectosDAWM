let contAntes= 0
let contDespues= 0

let firstTime=false;

var fetchbtn= document.getElementById('fetch');
      fetchbtn.addEventListener('click',  (event) => {

            //resetear contador 
      document.getElementById('contrec').innerHTML=0;
      document.getElementById('contJPG').innerHTML=0;
      document.getElementById('contGIF').innerHTML=0;
      document.getElementById('contPNG').innerHTML=0;
      document.getElementById('contotros').innerHTML=0;

      let cont0 = document.getElementById('contrec').innerHTML
      console.log(contAntes)
      contAntes=contDespues
      let imgFetch= document.getElementsByClassName('imgFetch')
      //console.log(imgFetch)
      
      //console.log(lista)
      for (let i = 0; i < imgFetch.length; i++) {
            cargarDatos(imgFetch[i]);

      }


      
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


      })

}

//FILTRADO

//JPG
var filtrarhbtnJPG= document.getElementById('filtrarJPG');
var flagFiltroJPG= false;

      filtrarhbtnJPG.addEventListener('click', (event) => {
      if(flagFiltroJPG==false){
            let imgFetch= document.getElementsByClassName('imgFetch')
            console.log(imgFetch)
            for (let i = 0; i < imgFetch.length; i++) {
                  if(imgFetch[i].getAttribute('src').split('.')[2].toUpperCase()!='JPG'){
                        imgFetch[i].style.visibility="hidden"
                  }
            }
            flagFiltroJPG=true;
      }else{
            limpiarFiltro();
            flagFiltroJPG=false;
      }
});

//GIF
var filtrarhbtnGIF= document.getElementById('filtrarGIF');
var flagFiltroGIF= false;

      filtrarhbtnGIF.addEventListener('click', (event) => {
      if(flagFiltroGIF==false){
            let imgFetch= document.getElementsByClassName('imgFetch')
            console.log(imgFetch)
            for (let i = 0; i < imgFetch.length; i++) {
                  if(imgFetch[i].getAttribute('src').split('.')[2].toUpperCase()!='GIF'){
                        imgFetch[i].style.visibility="hidden"
                  }
            }
            flagFiltroGIF=true;
      }else{
            limpiarFiltro();
            flagFiltroGIF=false;
      }
});

//PNG
var filtrarhbtnPNG= document.getElementById('filtrarPNG');
var flagFiltroPNG= false;

      filtrarhbtnPNG.addEventListener('click', (event) => {
      if(flagFiltroPNG==false){
            let imgFetch= document.getElementsByClassName('imgFetch')
            console.log(imgFetch)
            for (let i = 0; i < imgFetch.length; i++) {
                  if(imgFetch[i].getAttribute('src').split('.')[2].toUpperCase()!='PNG'){
                        imgFetch[i].style.visibility="hidden"
                  }
            }
            flagFiltroPNG=true;
      }else{
            limpiarFiltro();
            flagFiltroPNG=false;
      }
});

//OTROS
var filtrarhbtnotros= document.getElementById('filtrarotros');
var flagFiltrootros= false;

      filtrarhbtnotros.addEventListener('click', (event) => {
      if(flagFiltrootros==false){
            let imgFetch= document.getElementsByClassName('imgFetch')
            console.log(imgFetch)
            for (let i = 0; i < imgFetch.length; i++) {
                  let extension=imgFetch[i].getAttribute('src').split('.')[2].toUpperCase()
                  if(extension=='PNG' || extension=='JPG' || extension=='GIF'){
                        imgFetch[i].style.visibility="hidden"
                  }
            }
            flagFiltrootros=true;
      }else{
            limpiarFiltro();
            flagFiltrootros=false;
      }
});


//LIMPIAR FILTRO
let limpiarFiltro = () => {
      let imgFetch= document.getElementsByClassName('imgFetch')
      for (let i = 0; i < imgFetch.length; i++) {
                  imgFetch[i].style.visibility="visible"

      }
}

//CARGAR GRAFICO LINEAS
var grafo1btn= document.getElementById('grafo1');

grafo1btn.addEventListener('click', (event) => {
      let plantillaRow = ``

            if(firstTime==false){

                  plantillaRow += `
                                    <tr>
                                        <td class="dato" style="--start: 0.0; --size: ${contDespues}/15"> <span class="data"> ${contDespues} </span> </td>
                                    </tr>
                                    <tr>
                                        <td class="dato" style="--start: ${contDespues}/15; --size: 0.0"> <span class="data">  </span> </td>
                                    </tr>
                                    `
                                    firstTime=true

            }else{
                  
            let lista=document.getElementsByClassName('dato')
            let contadorInicio=document.getElementsByClassName('dato')[lista.length-1].getAttribute('style').split(':')[2];

            plantillaRow += `
                              <tr>
                                  <td class="dato" style="--start: ${contadorInicio}/15; --size: ${contDespues}/15"> <span class="data"> ${contDespues} </span> </td>
                              </tr>
                              <tr>
                                  <td class="dato" style="--start: ${contDespues}/15; --size: 0.0"> <span class="data">  </span> </td>
                              </tr>
                              `
      }

      document.getElementsByTagName('tbody')[0].innerHTML += plantillaRow

});

//LIMPIAR GRAFICO
let limpiarGrafico1 = () => {
      document.getElementsByTagName('tbody')[0].innerHTML=''
}
var limpiarGraf1btn=document.getElementById('limpiar1')
limpiarGraf1btn.addEventListener('click',(event) => {
      limpiarGrafico1();
      firstTime=false
});

//    CARGAR GRAFICO EXTENSIONES
var grafo2btn= document.getElementById('grafo2');

grafo2btn.addEventListener('click', (event) => {
      let plantillaRow = ``

      let valorPNG= document.getElementById('contPNG').innerHTML
      let valorJPG=  document.getElementById('contJPG').innerHTML
      let valorGIF=  document.getElementById('contGIF').innerHTML
      let valorOtros=  document.getElementById('contotros').innerHTML

      let listaCont= document.getElementsByClassName("cont")

      let listaTags= ['JPG','GIF','PNG','Otros']
      //JPG GIF PNG OTROS
      for(var i=0;i<listaCont.length-1;i++){

            plantillaRow += `
                  <tr>
                        
                        <td style="--start: 0.0; --size: ${listaCont[i].innerHTML}/21"> <span class="data"> ${listaCont[i].innerHTML} (${listaTags[i]})  </span> </td>
                  </t
                  `
      }

      document.getElementsByClassName('column')[0].innerHTML = plantillaRow

      });



