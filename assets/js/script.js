let edad;
let edades = [];
let arraypersonas = [];
let sumaEdadesMayores = 0;
let sumaEdadesMenores = 0;
let personas = 0;
let resultado = 0;
let nuevoIngreso = false;



function edadesMenores (el) {
    return el < 18;
  }
  
  function edadesMayores (el) {
    return el >= 18;
  }


  let submitButton = document.getElementById('button1');


    


  function contador(){
    submitButton.addEventListener('click', function(e) {

      
      let boxvalue = document.getElementById('edad').value;
      edades.push(boxvalue);
      arraypersonas.push("1"); 
      let array = JSON.stringify(edades);
      localStorage.setItem("Edades", array);
      localStorage.setItem("Personas", edades.length);
      let total = edades.reduce((a, b) => Number(a) + Number(b), 0);
      localStorage.setItem("Total", total);
      let promedio = total/edades.length;
      document.getElementById("edad").value = "";

      const contenido = document.getElementById("contenido");
      contenido.innerHTML = (Math.ceil(edades.length)) + " personas han sido agregadas";

      const promediovalue = document.getElementById("promediovalue");
      promediovalue.innerHTML = (Math.ceil(promedio)) + " Es la edad promedio entre todos los resultados";

      
  })};


  let resetButton = document.getElementById('button2');
  
  function reset(){

    resetButton.addEventListener('click', function(e) {
      localStorage.clear();

    })};

reset (resetButton);
contador(edad);

let menores = edades.filter(edadesMenores);
let mayores = edades.filter(edadesMayores);



for (const valor of menores) {
    sumaEdadesMenores += valor;
}


for (const valor of mayores) {
    sumaEdadesMayores += valor;
}



function calcularPromedioEdadMenores (edad, personas) {
    resultadomenores = (sumaEdadesMenores / menores.length).toFixed(1);

}

function calcularPromedioEdadMayores(edad, personas) {
    resultadomayores = (sumaEdadesMayores / mayores.length).toFixed(1);

}
calcularPromedioEdadMenores(edad, personas);
calcularPromedioEdadMayores(edad, personas);

const promedioedades = [ 
    { id: 1, "Edad promedio de menores":  resultadomenores+" años"},
    { id: 2, "Edad promedio de mayores": resultadomayores+" años"}
    ]
