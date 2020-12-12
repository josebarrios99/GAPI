let input = document.querySelectorAll(".input");
let cambiar = document.querySelector(".cambiar")
let apoyo = JSON.parse(window.localStorage.getItem("apoyo"));

cambiar.addEventListener("click", () => {


    let nombre,
        apellido,
        lugarExpedicion,
        fechaExpedicion,
        departamentoResidencia,
        fechNacimiento,
        ciudadResidencia,
        numeroCelular,
        direccionResidencia,
        nombrePersonaConfianza,
        telefonoPersonaConfianza

    input.forEach((element) => {

        switch (element.name) {

            case "nombre":

                nombre = element.value;
                console.log(nombre)
                break;
            case "apellido":
                apellido = element.value;
                break;

            case "lExpedicion":

                lugarExpedicion = element.value;
                break;
            case "fechaExpedicion":
                fechaExpedicion = element.value;
                break;
            case "departamentoResidencia":

                departamentoResidencia = element.value;
                console.log(departamentoResidencia)

                break;
            case "fechNacimiento":

                fechNacimiento = element.value;
                break;
            case "ciudadResidencia":

                ciudadResidencia = element.value;
                break;
            case "numeroCelular":
                numeroCelular = element.value;
                break;
            case "direccionResidencia":
                direccionResidencia = element.value;
                break;
            case "nombrePersonaConfianza":
                nombrePersonaConfianza = element.value;
                break;
            case "telefonoPersonaConfianza":
                telefonoPersonaConfianza = element.value;
                break;
        }


    })

   

    if (nombre == "" ||apellido == "" /*||lugarExpedicion.includes("Selecciona")*/ ||fechaExpedicion == "" /*||departamentoResidencia.includes("Selecciona")*/ ||fechNacimiento == "" /*||ciudadResidencia.includes("Selecciona")*/||numeroCelular == "" ||direccionResidencia == "" ||nombrePersonaConfianza == "" ||telefonoPersonaConfianza == ""){

        alert("complete todos los campos");

    }

    else{

        apoyo.nombre=nombre;
        apoyo.apellido=apellido;
        apoyo.lugarExpedicion=lugarExpedicion;
        apoyo.fechaExpedicion=fechaExpedicion;
        apoyo.departamentoResidencia=departamentoResidencia;
        apoyo.fechNacimiento=fechNacimiento;
        apoyo.ciudadResidencia=ciudadResidencia;
        apoyo.numeroCelular=numeroCelular;
        apoyo.direccionResidencia=direccionResidencia;
        apoyo.nombrePersonaConfianza=nombrePersonaConfianza;
        apoyo.telefonoPersonaConfianza=telefonoPersonaConfianza;

        //console.log(apoyo)

        window.localStorage.setItem("apoyo",JSON.stringify(apoyo));
        window.location.href="asistenciaPsicológica3.html"

    }

    


})

