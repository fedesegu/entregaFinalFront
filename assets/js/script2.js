//Aclaraciones de consignas: 
// 1) Arregle el boton de resetear;  2) Le sume la funcion mostrar error para que se tenga que ingresar valores mayores a 1; 3) le agregue un spread operator en la funcion contador; 4)agregue una funcion asincrona; 5) Agregue boton para sumar edades(hay que sintetizarlo en funciones)

//Faltaria como consigna:
// Consumir alguna libreria como Sweet alert capaz para el error 


let edad;
let edades = [];
let arraypersonas = [];
let personas = 0;
let resultado = 0;




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


let $resetButton = document.getElementById('button3');
  
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
let $edadesApi = document.getElementById('button2')

const api = async () =>{
  const resp = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  
    $edadesApi.addEventListener('click', function(e){
    data.forEach(({id})=> {
      edades.push(id);
      arraypersonas.push([...data]); 
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
  })
 })
}
// }
api();
// console.log(edadesApi)

// let sumarEdadesApi = (edadesApi) => {
// edadesApi.reduce((a, b) => Number(a) + Number(b), 0);
 
// }

// console.log(sumarEdadesApi(edadesApi));
// habria que meter algo de spread operator