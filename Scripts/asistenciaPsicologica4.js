let apoyo = JSON.parse(window.localStorage.getItem("apoyo"));
let database = firebase.database();
let next_button = document.querySelector(".next_button");
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let edad = document.querySelector(".edad");
let cedula = document.querySelector(".cedula");
let telefono = document.querySelector(".telefono");


telefono.innerHTML = "Número telefónico: " + apoyo.numeroCelular;
nombre.innerHTML = "Nombre: " + apoyo.nombre;
apellido.innerHTML = "Apellido: " + apoyo.apellido;
cedula.innerHTML = "Cédula: " + apoyo.cedula;

next_button.addEventListener("click", () => {

    let id = database.ref("Apoyo").push().key;
    apoyo.id = id;
    
    database.ref("Apoyo/" + apoyo.id).set(apoyo).then(
        () => {

            alert("registro exitoso");
            window.location.href = "index.html"
        }
    )
    

})

