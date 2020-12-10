const database = firebase.database();
const btn = document.querySelector(".changePage");
const lista = document.querySelector(".input-listadiv");
const inputsRead=document.querySelectorAll(".inputRead");
const inputsFollow= document.querySelectorAll(".inputFollow");
const inputsAtention= document.querySelectorAll(".inputAtention");
const inputDiv = document.querySelector(".inputDiv");



inputDiv.addEventListener("click",()=>{

    lista.value ="Ninguna";
    inputDiv.classList.add("inputSelected");

});

lista.addEventListener("change",()=>{

    inputDiv.classList.remove("inputSelected");
    
})

inputsRead.forEach((element)=>{

    element.addEventListener("click",()=>{

        inputsRead.forEach((e)=>{

            e.classList.remove("inputSelected");
            
        })
        element.classList.add("inputSelected");
    })

});


inputsFollow.forEach((element)=>{

    element.addEventListener("click",()=>{

        inputsFollow.forEach((e)=>{

            e.classList.remove("inputSelected");
            
        })
        element.classList.add("inputSelected");
    })

});

inputsAtention.forEach((element)=>{

    element.addEventListener("click",()=>{

        inputsAtention.forEach((e)=>{

            e.classList.remove("inputSelected");
            
        })
        element.classList.add("inputSelected");
    })

});

btn.addEventListener("click",()=>{

    let diversity;
    let read;
    let follow;
    let atention;

    //primera sección
    if(inputDiv.classList.contains("inputSelected")){

        diversity=inputDiv.value;
        console.log(diversity); 
    } 
    else{

        diversity=lista.value;
        console.log(diversity);
    }

    for (let index = 0; index < inputsRead.length; index++) {
        
        if(inputsRead[index].classList.contains("inputSelected")){

            read=inputsRead[index].value;
            console.log(read);
        }
        
    }

    
    for (let index = 0; index < inputsFollow.length; index++) {
        
        if(inputsFollow[index].classList.contains("inputSelected")){

            follow=inputsFollow[index].value;
            console.log(follow);
        }
        
    }

    for (let index = 0; index < inputsAtention.length; index++) {
        
        if(inputsAtention[index].classList.contains("inputSelected")){

            atention=inputsAtention[index].value;
            console.log(atention);
        }
        
    }

    if(diversity==""){

        alert("Por favor seleccione su tipo de condicion")
    }

    if(read==undefined){

        alert("Por favor seleccione su tipo de condicion")
    }

    if(follow==undefined){

        alert("Por favor seleccione su tipo de condicion")
    }

    if(atention==undefined){

        alert("Por favor seleccione su tipo de condicion")
    }

    if(!(diversity==""||read==undefined||follow==undefined||atention==undefined)){

        //let reference = database.ref("InfoRegistro").push();
        let registro={
        //id: reference.key,
        diversidad:diversity,
        leer:read,  
        instrucciones:follow,
        atencion:atention

        }

        /*reference.set(registro).then(

            ()=>{
               
            }

        );
                */
               window.localStorage.setItem("registro",JSON.stringify(registro));
               //console.log(JSON.stringify(registro));
               window.location.href="FormularioDeSolicitud2.html";
    }
})





