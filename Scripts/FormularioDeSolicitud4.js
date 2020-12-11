let botones = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");
let inputRazon=document.querySelector(".inputRazon");
let inputDiferente=document.querySelector(".inputDiferente");
let registro = JSON.parse(window.localStorage.getItem("registro"));




botones.forEach((element)=>{

    element.addEventListener("click",()=>{

        botones.forEach((e)=>{

            e.classList.remove("inputSelected");
            
        })
        element.classList.add("inputSelected");
    })

});

btn.addEventListener("click", () => {

    
    let areaConsulta;
    let establecido = false;

    for (let index = 0; index < botones.length; index++) {
        
        if(botones[index].classList.contains("inputSelected")){

            areaConsulta=botones[index].name;
            console.log(areaConsulta)
            establecido=true;
        }
        
    }

    if(establecido==false){

        

        if(inputDiferente.value==""){

            alert("por favor seleccione el tipo de proceso");
        }

    }

    else{

        if(inputRazon.value==""){

            alert("por favor indique el motivo de consulta");
        }else{

            let consulta={

                areaConsulta:areaConsulta,
                motivoConsulta:inputRazon.value
            }
            
            window.localStorage.setItem("consulta",JSON.stringify(consulta));
            window.localStorage.setItem("registro", JSON.stringify(registro));
            window.location.href="FormularioDeSolicitud5.html";
            

        }

      
    }
})
