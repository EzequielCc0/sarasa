function mostrar()
{
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let contadorReptil=0;
  let acumuladorReptil=0;
  let promReptil=0;
  let edadJoven=0;
  let flagEdad=1;
  let contadorMascotas=0;
  let contadorAves=0;
  let respuesta;
  let sexoMascota;
  let sexoJoven;
  let tipoJoven;
  let porcentajeAves;
  let contadorMamifero;
  let tipoMasCantidad;

do {
  nombre=prompt("ingrese nombre (entre 3 y 10 caracteres):");
  while(nombre.lenght<3||nombre.lenght>10){
    nombre=prompt("ERROR. ingrese nombre (entre 3 y 10 caracteres):");
  }
  tipo=prompt( " ingrese tipo de mascota (ave/mamifero/reptil):").toLowerCase();
  while(!(tipo=="ave"||tipo=="mamifero"||tipo=="reptil")){
    tipo=prompt("ERROR. ingrese tipo de mascota (ave/mamifero/reptil):").toLowerCase();
  }
  if (tipo=="reptil") {
    sangre="fria"
  }
  else{
    sangre=prompt("ingrese tipo de sangre (fria/calida):").toLowerCase();
    while (!(sangre=="fria"||sangre=="calida")) {
      sangre=prompt("ERROR. ingrese tipo de sangre (fria/calida):").toLowerCase();
    }
  }
  edad=parseInt(prompt("ingrese edad : (mayor a cero):"));
  while (isNaN(edad)||edad<1) {
    edad=parseInt(prompt("ERROR. ingrese edad: mayor a cero):"));
  }
  sexo=prompt("seleccione su sexo(m para macho/h para hembra):").toLowerCase();
  while (!(sexo == "m"||sexo == "h")) {
    sexo=prompt("ERROR. seleccione su sexo(m/h):").toLowerCase();
  }
  respuesta=prompt("quiere ingresar otra mascota? si/no").toLowerCase();
  while (!(respuesta == "si"||respuesta=="no")) {
    respuesta=prompt("ERROR. Desea ingresar otra mascota? si/no").toLowerCase();
  }
  alert(nombre, tipo, sangre, edad, sexo, respuesta);
switch (tipo) {
  case "ave":
    contadorAves++;
    break;
  case "reptil":
    acumuladorReptil=acumuladorReptil+edad;
    contadorReptil++;
    break;
  case "mamifero":
    contadorMamifero++;
    break;
}
if (sexo=="m") {
  sexoMascota="macho"
}
else{
  sexoMascota="hembra"
}

if (flagEdad==1||edadJoven>edad) {
  edadJoven=edad;
  sexoJoven=sexo;
  tipoJoven=tipo;
  flagEdad=0
}
contadorMascotas++;

} while (respuesta == "si");

if (contadorReptil != 0) {
  promReptil=acumuladorReptil/contadorReptil;
  alert("El promedio de edad de los reptiles es de "+ promReptil );
}
alert("La mascota mas joven es de tipo "+tipoJoven+" de sexo "+sexoMascota+" y tiene "+edadJoven+" años.");
porcentajeAves=(contadorAves * 100) / contadorMascotas;
alert("El porcentaje de aves es de "+ porcentajeAves+" %");
if (contadorMamifero > contadorReptil||contadorMamifero > contadorAves) {
  tipoMasCantidad= "mamifero";
}
else if (contadorReptil  > contadorAves) {
  tipoMasCantidad  = "reptil";
} else {
  tipoMasCantidad = "aves";
}
alert("El tipo de mascota que mas cantidad hay es: " + tipoMasCantidad);

}




