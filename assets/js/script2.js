let edad;
let edades = [];
let arraypersonas = [];
let sumaEdadesMayores = 0;
let sumaEdadesMenores = 0;
let personas = 0;
let resultado = 0;
let nuevoIngreso = false;



let $submitButton = document.getElementById('button1');


    
    function contador(){
    $submitButton.addEventListener('click', function(e) {
      
      
      let $boxvalue = document.getElementById('edad').value;
      $boxvalue = "" ? mostrarError ("Tienes que ingresar un número positivo mayor a 1") : isNaN ($boxvalue) ? mostrarError ("Tienes que ingresar un número positivo mayor a 1") : $boxvalue < 1 ? mostrarError("Tienes que ingresar un número positivo mayor a 1") : edades.push($boxvalue);

      
      arraypersonas.push("1"); 
      let array = JSON.stringify(edades);
      localStorage.setItem("Edades", array);
      localStorage.setItem("Personas", edades.length);
      let total = [...edades].reduce((a, b) => Number(a) + Number(b), 0);
      localStorage.setItem("Total", total);
      let promedio = total/edades.length;
      document.getElementById("edad").value = "";

      let $contenido = document.getElementById("contenido");
      $contenido.innerHTML = (Math.ceil(edades.length)) + " personas han sido agregadas";

      let $promediovalue = document.getElementById("promediovalue");
      $promediovalue.innerHTML = (Math.ceil(promedio)) + " Es la edad promedio entre todos los resultados";

     
  })};


let $resetButton = document.getElementById('button2');
  
$resetButton.addEventListener('click', function(e) {
localStorage.clear();
let $contenido = document.getElementById("contenido");
$contenido.innerHTML = 0;
let $promediovalue = document.getElementById("promediovalue");
$promediovalue.innerHTML = 0;
arraypersonaspersonas = [];
edades = [];

});

contador(edad);

const mostrarError = (error) => {
    const $mensajeError = document.createElement("p")
    $mensajeError.textContent = error
    $mensajeError.classList.add("error")
      
    const $contenido = document.getElementById("button1")
    $contenido.appendChild($mensajeError) //<p> es hijo de ese contenido 
    
    setTimeout(() =>{
        $mensajeError.remove() //para borrarlo del DOM 
    }, 3000)
  }
let edadesApi = [];

const api = async () =>{
  const resp = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  
  data.forEach(({name})=> {
    edadesApi.push(name);
  })
}
// }
// api();
// console.log(edadesApi)

// let sumarEdadesApi = (edadesApi) => {
// edadesApi.reduce((a, b) => Number(a) + Number(b), 0);
 
// }

// console.log(sumarEdadesApi(edadesApi));
// habria que meter algo de spread operator