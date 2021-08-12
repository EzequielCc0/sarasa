function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaProm;
  let edad;
  let nombreMejorProm;
  let mejorNota=0;
  let flagMejorNota=1;
  let flagAlumna=1;
  let alumnaJoven;
  let edadJoven;
  let contadorFisica=0;
  let promFisica=0;
  let contadorQuimica=0;
  let promQuimica=0;
  let contadorSistemas=0;
  let promSistemas=0;
  let edadMasCursa=0;
  let nombreMasCursa;
  let cantMasMaterias=1;
  let carreraMasCursa;
 
   for(let i = 0;i < 500; i++){
     nombre = prompt("ingrese nombre del estudiante:");
    
     carrera = prompt("ingrese carrera(quimica/fisica/sistemas):").toLowerCase();
   while((carrera != "quimica" && carrera != "fisica" && carrera!="sistemas")){
     carrera=prompt("ERROR. ingrese carrera (quimica/fisica/sistemas):").toLowerCase();
   }
   sexo=prompt("seleccione su sexo(masculino/femenino/no binario):").toLowerCase();
   while (!(sexo=="masculino"||sexo=="femenino"||sexo=="no binario")) {
     sexo=prompt("ERROR. seleccione s sexo(masculino/femenino/no binario):").toLowerCase();
   }
   cantMaterias=parseInt(prompt("ingrese cantidad de materias(entre 1 y 5):"));
   while (isNaN(cantidadMaterias)|| cantidadMaterias < 1|| cantidadMaterias > 5) {
     cantidadMaterias=parseInt(prompt("ERROR. ingrese cantidad de materias(entre 1 y 5):"));
   }
   notaProm=parseInt(prompt("ingrese nota promedio (entre 0 y 10):"));
   while (isNaN(notaProm)||notaProm < 0||notaProm > 10) {
     notaProm=parseInt(prompt("ERROR. ingrese nota promedio(entre 0 y 10):"));
   }
   edad=parseInt(prompt("ingrese edad(mayor a cero):"));
   while (isNaN(edad)||edad < 1) {
     edad=parseInt(prompt("ERROR. ingrese edad(mayor a cero):"));
   }
alert(nombre, carrera, sexo, cantidadMaterias, notaProm, edad);
 if (flagAlumna == 1||(sexo=="femenino" && edadJoven > edad)) 
 {
   flagAlumna=0;
   edadJoven = edad;
   alumnaJoven= nombre;
 }
 switch (carrera) {
   case "fisica":
     contadorFisica++;
     if(mejorNota < notaProm||flagMejorNota == 1){
       nombreMejorProm = nombre;
       mejorNota = notaProm;
       flagMejorNota = 0;
     }
     break;
   case "quimica":
     contadorQuimica++;
     break;
   case "sistemas":
     contadorSistemas++;
     break;
     }
     if ((!(carrera == "quimica")) && cantidadMaterias>cantMasMaterias) {
       edadMasCursa=edad;
       nombreMasCursa=nombre;
       cantMasMaterias=cantidadMaterias;
       carreraMasCursa=carrera;
     }
 
   }
 if (flagMejorNota==0) {
   alert("El mejor promedio de fisica lo tiene "+nombreMejorProm+" y es de "+mejorNota);
 }
 if (flagAlumna==0) {
   alert("la alumna mas joven es "+alumnaJoven+" y tiene "+edadJoven+"");
 }
 promFisica = contadorFisica*100/500;
 alert(" promedio de la carrera de fisica es de "+promFisica+"%");
 promQuimica = contadorQuimica*100/500;
 alert(" promedio de la carrera de quimica es de "+promQuimica+"%");
 promSistemas = contadorSistemas*100/500;
 alert(" de la carrera de sistemas es de "+ promSistemas);
 if (edadMasCursa != 0) {
   alert("nombre del estudiante que mas cursa es " + nombreMasCursa +" cursa "+cantMasMaterias+" materias de la carrera de "+carreraMasCursa+" y tiene "+edadMasCursa+" ");
 }
 
}