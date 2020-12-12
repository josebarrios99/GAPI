let apoyo = JSON.parse(window.localStorage.getItem("apoyo"));
let input = document.querySelectorAll(".input");


input.forEach((element)=>{

    element.addEventListener("click",()=>{

        apoyo.tipoApoyoComunicacion=element.getAttribute('value')
        window.localStorage.setItem("apoyo",JSON.stringify(apoyo));
        window.location.href="asisPsico.html";
    
    })

});

