const database = firebase.database();
let registro = JSON.parse(window.localStorage.getItem("registro"));
let inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");





btn.addEventListener("click", () => {

    let nombre,
        apellido,
        tDocumento,
        nDocumento,
        fExpedicion,
        lExpedicion,
        lNacimiento,
        fNacimiento,
        depResidencia,
        ciuResidencia,
        dirResidencia,
        telefono,
        tVivienda,
        estrato,
        viveCon,
        descripCon,
        graEscolaridad,
        isTrabajo;

    inputs.forEach((element) => {

        switch (element.name) {

            case "userName":

                nombre = element.value;
               
                break;
            case "typeOfDocument_txt":

                tDocumento = element.value;

                break;
            case "expeditionOfDocument_txt":

                lExpedicion = element.value;

                break;
            case "placeOfBirthUser_txt":

                lNacimiento = element.value;

                break;
            case "departmentUser_txt":

                depResidencia = element.value;

                break;
            case "userLastName":

                apellido = element.value;

                break;
            case "numberOfDocument":

                nDocumento = element.value;

                break;
            case "dateOfDocument":

                fExpedicion = element.value;

                break;
            case "birthDate":

                fNacimiento = element.value;

                break;
            case "cityOfResidence_txt":

                ciuResidencia = element.value;

                break;
            case "directionUser":

                dirResidencia = element.value;

                break;
            case "cellUser":

                telefono = element.value;

                break;
            case "typeHouseUser_txt":

                tVivienda = element.value;

                break;
            case "cell2":

               // nombre = element.value;

                break;
            case "estratoUser":

                estrato = element.value;

                break;
            case "compani":

                if (element.checked) {
                    viveCon = element.value;
                }


                break;

            case "companyOfUser":

                descripCon = element.value;

                break;

            default:

                break;
        }

    });

    if (!(nombre == undefined ||
        tDocumento == undefined ||
        nDocumento == undefined ||
        fExpedicion == undefined ||
        lExpedicion == undefined ||
        lNacimiento == undefined ||
        fNacimiento == undefined ||
        depResidencia == undefined ||
        ciuResidencia == undefined ||
        dirResidencia == undefined ||
        telefono == undefined ||
        tVivienda == undefined ||
        estrato == undefined ||
        viveCon == undefined ||
        descripCon == undefined||apellido== undefined)) {


        registro.nombre = nombre;
        registro.apellido = apellido;
        registro.tDocumento = tDocumento;
        registro.nDocumento = nDocumento;
        registro.fExpedicion = fExpedicion;
        registro.lExpedicion = lExpedicion;
        registro.lNacimiento = lNacimiento;
        registro.fNacimiento = fNacimiento;
        registro.depResidencia = depResidencia;
        registro.ciuResidencia = ciuResidencia;
        registro.dirResidencia = dirResidencia;
        registro.telefono = telefono;
        registro.tVivienda = tVivienda;
        registro.estrato = estrato;
        registro.viveCon = viveCon;
        registro.descripCo = descripCon;

        window.localStorage.setItem("registro", JSON.stringify(registro));
        console.log(registro.nombre);

        window.location.href="FormularioDeSolicitud3.html";

        ///console.log(registro);


    }

    else {

        alert("Rellene todos los campos")

    }

    //console.log(registro);
})



