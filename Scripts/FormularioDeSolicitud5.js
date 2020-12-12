let inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");
let otro = document.querySelector(".inputOtro");
let consulta = JSON.parse(window.localStorage.getItem("consulta"));
let registro = JSON.parse(window.localStorage.getItem("registro"));






btn.addEventListener("click", () => {

    let
        nombre,
        apellido,
        tDocumento,
        nDocumento,
        fExpedicion,
        lExpedicion,
        fNacimiento,
        depResidencia,
        ciuResidencia,
        dirResidencia,
        telefono,
        tRelacionUser
        

    inputs.forEach((element) => {




        switch (element.name) {

            case "CompanionName":

                nombre = element.value;

                break;
            case "CompaniontypeOfDocument_txt":

                tDocumento = element.value;
                break;
            case "CompanionExpeditionOfDocument_txt":
                lExpedicion = element.value;
                break;
            case "CompanionBirthDate":
                fNacimiento = element.value;
                break;
            case "CompanionDepartment_txt":
                depResidencia = element.value;
                break;
            case "CompanionLastName":
                apellido = element.value;
                break;
            case "CompanionNumberOfDocument":
                nDocumento = element.value;
                break;
            case "CompanionDateOfDocument":
                fExpedicion = element.value;
                break;
            case "cityOfResidence_txt":
                ciuResidencia = element.value;
                break;
            case "cell2":
                telefono = element.value;
                break;
            case "CompanionDirection":
                dirResidencia = element.value;
                break;
            case "CompanionAndUserRelationList":
                tRelacionUser
                break;

        }

    });

    if (nombre == "" || apellido == "" || tDocumento == "" || nDocumento == "" || fExpedicion == "" || lExpedicion == "" ||
        fNacimiento == "" || depResidencia == "" || ciuResidencia == "" || dirResidencia == "" || telefono == ""
    ) {


        alert("rellene todos los campos")
        
    }

    else {

        if (tRelacionUser == undefined) {

            if (otro.value == "") {

                alert("rellene todos los campos");
            }
            else {

                tRelacionUser = otro.value;

                let infoAcompañante = {

                    nombre: nombre,
                    apellido: apellido,
                    tDocumento: tDocumento,
                    nDocumento: nDocumento,
                    fExpedicion: fExpedicion,
                    lExpedicion: lExpedicion,
                    fNacimiento: fNacimiento,
                    depResidencia: depResidencia,
                    ciuResidencia: ciuResidencia,
                    dirResidencia: dirResidencia,
                    telefono: telefono,
                    tRelacionUser: tRelacionUser,
                }

                window.localStorage.setItem("infoAcompañante", JSON.stringify(infoAcompañante));
                window.localStorage.setItem("consulta", JSON.stringify(consulta));
                window.localStorage.setItem("registro", JSON.stringify(registro));
                window.location.href="FormularioDeSolicitud6.html"

            }

        }
    }

})