let input = document.querySelectorAll(".input");
let apoyo = JSON.parse(window.localStorage.getItem("apoyo"));
let tipo = document.querySelectorAll(".tipo");
let cambiar = document.querySelector(".cambiar");


// necesita ayuda psico
input.forEach((element)=>{

    element.addEventListener("click",()=>{

        apoyo.requiereAsistenciaPsicologica=element.getAttribute('value')
        
        if(apoyo.requiereAsistenciaPsicologica=="no"){

            window.location.href="FormularioDeSolicitud.html";
            
        }
    
    })

});

// como desea la ayuda
tipo.forEach((element)=>{

    element.addEventListener("click",()=>{

        apoyo.formaAsistencia=element.getAttribute('value')
        
    })

});

cambiar.addEventListener("click",()=>{

    if(apoyo.formaAsistencia==undefined||apoyo.requiereAsistenciaPsicologica==undefined){

        alert("Por favor complete los campos")
    }

    else{

        console.log(apoyo)
        window.localStorage.setItem("apoyo",JSON.stringify(apoyo));

        window.location.href="asistenciaPsicológica2.html";

    }

})
  
       