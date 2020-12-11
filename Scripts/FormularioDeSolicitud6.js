let input= document.querySelectorAll(".input");
let boton = document.querySelector(".botonCambio")
let fecha = document.querySelector(".fecha");
let consulta = JSON.parse(window.localStorage.getItem("consulta"));
let registro = JSON.parse(window.localStorage.getItem("registro"));
let infoAcompañante = JSON.parse(window.localStorage.getItem("infoAcompañante"));

input.forEach((element)=>{

    element.addEventListener("click",()=>{

        input.forEach((e)=>{

            e.classList.remove("btn-selected");
            
        })
        element.classList.add("btn-selected");
    })

});



boton.addEventListener("click",()=>{

    let hora
    let existe=false;

    
    for (let index = 0; index < input.length; index++) {
        
        if(input[index].classList.contains("btn-selected")){

            hora=input[index].value;
            existe=true;
            
        }
  
    }
   
    //verifica que todo esté llenado
    if(!existe||fecha.value==""){

        alert("Complete todos los campos")

    }

    else{

        consulta.hora=hora
        consulta.fecha=fecha.value


        window.localStorage.setItem("consulta", JSON.stringify(consulta));
        window.localStorage.setItem("registro", JSON.stringify(registro));
        window.location.href="FormularioDeSolicitud7.html"
        console.log(registro);
        console.log(infoAcompañante);
    }
    
   
})
