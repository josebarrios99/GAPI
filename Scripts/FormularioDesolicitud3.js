let registro = JSON.parse(window.localStorage.getItem("registro"));
let inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".changePage");


btn.addEventListener("click", () => {

    let

        graEscolaridad,
        isTrabajo,

        numTrabajo,
        dirTrabajo,

        ocupacion,
        ingresoMen
    inputs.forEach((element) => {

        switch (element.name) {

            case "educationLebel":

                graEscolaridad = element.value;

                break;

            case "haveWork":
                if (element.checked) {

                    isTrabajo = element.value;    
                }
               
                break;


            case "telOfWork":

                if(document.getElementById("no").checked){

                    numTrabajo = ""
                }
                else {
                    numTrabajo = element.value;
                }


                break;

            case "direccionOfWork":

                if(document.getElementById("no").checked){
                    dirTrabajo = ""
                }
                else{
                    dirTrabajo= element.value;
                }
             
                break;

            case "job":
                
                if(document.getElementById("no").checked){
                    ocupacion = ""
                }
                else{
                    ocupacion = element.value;
                }
               
                break;

            case "salary":

                ingresoMen = element.value;
                break;
        }
    })
    
    registro.graEscolaridad=graEscolaridad;
    registro.isTrabajo=isTrabajo;
    registro.numTrabajo=numTrabajo;
    registro.dirTrabajo=dirTrabajo;
    registro.ocupacion=ocupacion;
    registro.ingresoMen=ingresoMen;
    
    console.log(registro);

    window.localStorage.setItem("registro", JSON.stringify(registro));
    console.log(registro.nombre);
    window.location.href="FormularioDeSolicitud4.html"

})