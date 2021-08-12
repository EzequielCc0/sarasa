function mostrar() {
  let tipo;
  let origen;
  let precio;
  let respuesta;
  let contadorMuneca=0;
  let contadorRompecabezas=0;
  let contadorPelota=0;
  let jugueteMasVendido;
  let contadorJuguetes=0;
  let sumaPrecioJuguetes=0;
  let promedioJuguetes=0;
  let recaudacionTotal=0;
  let precioMasBarato=5001;
  let IVA=0;
  let totalDeTodo=0;
  do{
    tipo=prompt("Inserte tipo de jueguete (muñeca/rompecabezas/pelota):").toLowerCase();
  while(!(tipo == "muñeca"||tipo == "rompecabezas"||tipo == "pelota")){
    tipo=prompt("ERROR. Inserte tipo de jueguete (muñeca/rompecabezas/pelota):").toLowerCase();
  }
  origen=prompt("Inserte origen (nacional/importado):").toLowerCase();
  while (!(origen == "nacional"||origen == "importado")) {
    origen=prompt("ERROR. Inserte origen (nacional/importado):").toLowerCase();
  }
  precio=parseInt(prompt("Inserte precio (entre $1000 y $5000):"));
  while (isNaN(precio)||precio<1000||precio>5000) {
    precio=parseInt(prompt("ERROR. Inserte precio(entre $1000 y $5000):"));
  }
  respuesta=prompt("Desea ingresar otra venta? si/no").toLowerCase();
  while (!(respuesta == "si"||respuesta == "no")) {
    respuesta=prompt("ERROR. Desea ingresar otra venta? si/no").toLowerCase();
  }
  switch (tipo) {
    case "muñeca":
      contadorMuneca++;
      break;
    case "rompecabezas":
      contadorRompecabezas++;
      if (precioMasBarato > precio && origen == "nacional") {
        precioMasBarato = precio
      }
      break;
    case "pelota":
      contadorPelota++;
      break;
  }
if (origen == "importado") {
  contadorJuguetes++;
  sumaPrecioJuguetes = sumaPrecioJuguetes+precio;
}
recaudacionTotal=recaudacionTotal+precio;
console.log(tipo,origen,precio);
}while (respuesta == "si") 
if (contadorMuneca > contadorRompecabezas && contadorMuneca > contadorPelota) {
  jugueteMasVendido = "muñeca";
}
else if (contadorPelota > contadorRompecabezas) {
  jugueteMasVendido = "pelota";
}
else{
  jugueteMasVendido = "rompecabezas";
}
alert("jueguete mas vendido ess"+jugueteMasVendido);
if(contadorJuguetes!=0){
  promedioJuguetes=sumaPrecioJuguetes/contadorJuguetes;
  alert(" promedio del precio de los jueguetes importados es "+promedioJuguetes);
}
alert("la recaudación total fue de "+recaudacionTotal);
if (precioMasBarato != 5001) {
  alert("rompecabezas nacional mas barato vendido es de "+precioMasBarato);
}
IVA = recaudacionTotal * 0.21;
totalDeTodo = IVA + recaudacionTotal;
alert("Se percibió de IVA "+ IVA + " y sumado es $" + totalDeTodo);

}