let input = document.querySelectorAll(".input");



input.forEach((element)=>{

    element.addEventListener("click",()=>{

        let apoyo={

        requiereApoyoComunicacion:element.getAttribute('value')
            
        }
        window.localStorage.setItem("apoyo",JSON.stringify(apoyo));
        if(apoyo.requiereApoyoComunicacion=="si"){

           
            window.location.href="apoyo2.html";
        }
        else{
    
            window.location.href="apoyo3.html"; 
        }
        
    })

});


