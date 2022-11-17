var fetchbtn= document.getElementById('fetch');
      fetchbtn.addEventListener('click', (event) => {
      let imgFetch= document.getElementsByClassName('imgFetch')
      console.log(imgFetch)
      for (let i = 0; i < imgFetch.length; i++) {
            cargarDatos(imgFetch[i])
      }
      //mostrarDatos()
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
}

let mostrarFrases = () => {

}