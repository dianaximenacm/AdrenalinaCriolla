
function cont() {
    var cupos=document.getElementById("cupos").value; // toma el elemento de input de los cupos que quiere el usuario 
    var t=document.getElementById("tot"); // toma el div en donde se va a poner el numero de cupos disponibles 
    cupos.innerText=parseInt(cupos,10);
    var total=10; // total de cupos disponibles
    total=total-cupos;
    t.innerHTML=total; // introduce el valor de cupos disponibles en el div de id=tot
    
    
}