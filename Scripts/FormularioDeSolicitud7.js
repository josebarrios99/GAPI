let consulta = JSON.parse(window.localStorage.getItem("consulta"));
let registro = JSON.parse(window.localStorage.getItem("registro"));
let infoAcompañante = JSON.parse(window.localStorage.getItem("infoAcompañante"));
let checkbox = document.querySelector(".aceptoTerminos");
const nombre= document.getElementById("textNombreConfirmacion");
const apellido= document.getElementById("textApellidoConfirmacion");
const cedula= document.getElementById("textCedulaConfirmacion");
const numero= document.getElementById("textTelefonoConfirmacion");
const textFecha=document.querySelector(".textFecha");
const btnCambio= document.querySelector(".btnCambio");
const database = firebase.database();

nombre.innerHTML="Nombre: "+registro.nombre;
apellido.innerHTML="Apellido: "+registro.apellido;
cedula.innerHTML="Cédula: "+registro.nDocumento;
numero.innerHTML="Número Telefónico: "+registro.telefono;
textFecha.innerHTML= consulta.hora+" "+consulta.fecha;

btnCambio.addEventListener("click", () => {

if(checkbox.checked){
    registro.id=database.ref("Registro").push().key;
    consulta.id=database.ref("Consultas").push().key;
    consulta.idUsuario=registro.id;
    infoAcompañante.id=database.ref("Acompañantes").push().key;
    
    infoAcompañante.idUsuario=registro.id;
    
    database.ref("Registros/"+registro.id).set(registro);
    database.ref("Acompañantes/"+infoAcompañante.id).set(infoAcompañante);
    database.ref("Consultas/"+consulta.idUsuario).set(consulta);
    alert("registro exitoso")
}

else{

    alert("Debes aceptar los terminos y condiciones")
}


   
})
