let apoyo = JSON.parse(window.localStorage.getItem("apoyo"));
let animo = document.querySelectorAll(".animo");
let estadoMental = document.querySelectorAll(".estadoMental")
let next_button = document.querySelector(".next_button")
let consulta=document.querySelector(".consulta");

animo.forEach((element) => {

    element.addEventListener("click", () => {

        animo.forEach((e) => {

            e.classList.remove("inputSelected");

        })
        element.classList.add("inputSelected");
    })

});


estadoMental.forEach((element) => {

    element.addEventListener("click", () => {

        estadoMental.forEach((e) => {

            e.classList.remove("inputSelected");

        })
        element.classList.add("inputSelected");
    })

});

next_button.addEventListener("click", () => {

    let saludMental,estadoDeAnimo,motivoConsulta;
    let haySalud=false;
    let hayAnimo=false;

    for (let index = 0; index < estadoMental.length; index++) {

        if (estadoMental[index].classList.contains("inputSelected")) {

            saludMental = estadoMental[index].getAttribute('value');
            haySalud = true;
        }

    }

    for (let index = 0; index < animo.length; index++) {

        if (animo[index].classList.contains("inputSelected")) {

            estadoDeAnimo = animo[index].getAttribute('value');
            hayAnimo = true;
        }

    }

    
    if(hayAnimo&&haySalud&& consulta.value!==""){

        apoyo.estadoDeAnimo=estadoDeAnimo;
        apoyo.saludMental=saludMental;
        apoyo.motivoConsulta=consulta.value

        window.localStorage.setItem("apoyo",JSON.stringify(apoyo));
        window.location.href="asistenciaPsicológica4.html"

    }

    else{

        alert("selecciona las opciones correspondientes");
        

    }
})