console.log("entre js")

var fetchbtn= document.getElementById('fetch');

fetchbtn.addEventListener('click',  (event) => {

      let imgFetch= document.getElementsByClassName('imgFetch')

      for (let i = 0; i < imgFetch.length; i++) {
            cargarDatos(imgFetch[i]);
      }


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
    })

}