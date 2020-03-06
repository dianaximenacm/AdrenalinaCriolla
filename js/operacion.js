var adicion = document.getElementById("adicion");
var cupos = document.getElementById("cupos");
var suscupos = 0;
var totalCupos = cupos.innerText


function adicionar() {
  if (suscupos < totalCupos) {
    suscupos = suscupos + 1;
    adicion.innerHTML = suscupos;
  }else{
    swal("CUIDADO" , "el numero maximo de tiquetes a pedir es" + " " + totalCupos, "warning") 
  }
}

function sustraer() {
  if (suscupos > 0) {
    suscupos = suscupos - 1;
    adicion.innerHTML = suscupos;
  }
}

function Agregar(){
  var cantidadtiquet = adicion.innerText
  
  if (cantidadtiquet > 0) {
    totalCupos = totalCupos - cantidadtiquet
    cupos.innerHTML = totalCupos
    swal({
      title: "Tiquetes pedidos",
      text: "Has agregado" + " " + cantidadtiquet + " " + "tickets para armar tu parche",
      icon: "success",
      button: "Entendido"
  })
  suscupos = 0
  adicion.innerHTML = suscupos
  } if(cantidadtiquet == suscupos){
    swal("CUIDADO" , "No has realiado pedido", "warning") 
  
  } 
   
  }

var adicion1 = document.getElementById("adicion1");
var cupos1 = document.getElementById("cupos1");
var suscupos1 = 0;
var totalCupos1 = cupos1.innerText


function adicionar1() {
  if (suscupos1 < totalCupos1) {
    suscupos1 = suscupos1 + 1;
    adicion1.innerHTML = suscupos1;
  }else{
    swal("CUIDADO" , "el numero maximo de tiquetes a pedir es" + " " + totalCupos1, "warning") 
  }
}

function sustraer1() {
  if (suscupos1 > 0) {
    suscupos1 = suscupos1 - 1;
    adicion1.innerHTML = suscupos1;
  }
}


function Agregar1(){
  var cantidadtiquet1 = adicion1.innerText
  
  if (cantidadtiquet1 > 0) {
    totalCupos1 = totalCupos1 - cantidadtiquet1
    cupos1.innerHTML = totalCupos1
    swal({
      title: "Tiquetes pedidos",
      text: "Has agregado" + " " + cantidadtiquet1 + " " + "tickets para armar tu parche",
      icon: "success",
      button: "Entendido"
  })
  suscupos1 = 0
  adicion1.innerHTML = suscupos1
} if(cantidadtiquet1 == suscupos1){
  swal("CUIDADO" , "No has realiado pedido", "warning") 

} 
 
}