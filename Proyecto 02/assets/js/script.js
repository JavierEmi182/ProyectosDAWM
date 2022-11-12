var fetchbtn= document.getElementById('fetch');
fetchbtn.addEventListener('click', (event) => {
      for (let i = 0; i < 3; i++) {
            cargarDatos(i)
      }
      //mostrarDatos()
});

//window.addEventListener('DOMContentLoaded', (event) => {
//      cargarDatos()
      //mostrarDatos()
//});

let cargarDatos = (i) => {
      let url = 'https://random.dog/woof.json'
      fetch(url)
      .then((response) => response.text())
      .then((data) => {

            //////const obj = JSON.parse(data);
            //////console.log(obj);

            //data sacar url
            //////const imgURL = obj.url
            //////console.log(imgURL)

            //setear en img (imgAns)
            //let setear = 
            //let img = document.createElement("img")
            //img.setAttribute("src", imgURL)

            //let select = document.getElementsByClassName('g')[0].innerHTML+=img

                  const obj = JSON.parse(data);
                  console.log(obj);
                  //data sacar url
                  const imgURL = obj.url
                  console.log(imgURL)
                  if(i==0){
                        let select1 = document.getElementById('imgAns1')
                        console.log(select1)
                        select1.setAttribute("src",imgURL)
                        let extension = imgURL.split('.')[2]
                        console.log(extension)
                        if(extension=='mp4'||extension=='.webm'){
                              cargarDatos(i)
                        }
                  }else if(i==1){
                        let select2 = document.getElementById('imgAns2')
                        console.log(select2)
                        select2.setAttribute("src",imgURL)
                        let extension = imgURL.split('.')[2]
                        console.log(extension)
                        if(extension=='mp4'||extension=='.webm'){
                              cargarDatos(i)
                        }
                  }else{
                        let select3 = document.getElementById('imgAns3')
                        console.log(select3)
                        select3.setAttribute("src",imgURL)
                        let extension = imgURL.split('.')[2]
                        console.log(extension)
                        if(extension=='mp4'||extension=='.webm'){
                              cargarDatos(i)
                        }
                  }
            

            /*let select1 = document.getElementById('imgAns1')
            console.log(select1)
            select1.setAttribute("src",imgURL)

            let extension = imgURL.split('.')[2]
            if(extension=='mp4'){
                  cargarDatos()
            }*/
            //console.log(extension)
      })
}

let mostrarFrases = () => {

}