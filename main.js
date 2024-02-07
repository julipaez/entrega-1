
alert ("Bienvenido a Santander")

let consulta = confirm("Sacá tu cuenta gratis: te regalamos los primeros 6 meses bonificados")

if (consulta){
    let producto = prompt("¿Qué producto estás buscando?").toLowerCase()
    let edad = parseInt(prompt("Por favor ingresa tu edad"))
 
if(producto === "cuenta sueldo" && edad >= 18 && edad <60){
    alert("¡Felicidades, puedes acceder a la " + producto +"!")
   } else if (producto === "cuenta senior" && edad >= 60){
        alert("¡Felicidades, puedes acceder a la " + producto +"!")
    } else if (producto === "cuenta nova" && edad < 18 && edad >= 13){
        alert("¡Felicidades, puedes acceder a la " + producto +"!")
   } else {
    alert("Lo sentimos, en este momento no contamos con este producto.")
   }
 }
 