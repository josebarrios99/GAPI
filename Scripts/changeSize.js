const btn_Up = document.getElementById('btn_upFont');
const btn_Down = document.getElementById('btn_downFont');
const localStorage = window.localStorage;
var textSize = 0;
const sizeP = 16;
const sizeH4 = 34;
const sizeH5 = 24;
const sizeH6 = 20;

//alert("Sirvo");

defaultFont = () => {
    let newSizeP = sizeP + textSize;
    let newSizeH4 = sizeH4 + textSize;
    let newSizeH5 = sizeH5 + textSize;
    let newSizeH6 = sizeH6 + textSize;

    console.log('Text Size: ' + textSize);
    console.log('p1 Size: ' + newSizeP);
    console.log('h4 Size: ' + newSizeH4);

    document.querySelectorAll('p').forEach(e => e.style.fontSize = newSizeP + 'px');
    document.querySelectorAll('h4').forEach(e => e.style.fontSize = newSizeH4 + 'px');
    document.querySelectorAll('h5').forEach(e => e.style.fontSize = newSizeH5 + 'px');
    document.querySelectorAll('h6').forEach(e => e.style.fontSize = newSizeH6 + 'px');
}

changeFont = () => {
    if (localStorage.getItem('textSize') !== null) {
        textSize = Number(localStorage.getItem('textSize'));

        console.log("Cargando tamaño" + textSize);
    } else {
        textSize = 0;
    }
    defaultFont();
}

changeFont();

//alert("Si srivio o que rayos pasa");

upFont = () => {
    //alert('Funciono ');

    if (textSize < 8) {
        textSize++;

        let newSizeP = sizeP + textSize;
        let newSizeH4 = sizeH4 + textSize;
        let newSizeH5 = sizeH5 + textSize;
        let newSizeH6 = sizeH6 + textSize;

        console.log('Text Size: ' + textSize);
        console.log('p1 Size: ' + newSizeP);
        console.log('h4 Size: ' + newSizeH4);

        localStorage.setItem('textSize', textSize);
        document.querySelectorAll('p').forEach(e => e.style.fontSize = newSizeP + 'px');
        document.querySelectorAll('h4').forEach(e => e.style.fontSize = newSizeH4 + 'px');
        document.querySelectorAll('h5').forEach(e => e.style.fontSize = newSizeH5 + 'px');
        document.querySelectorAll('h6').forEach(e => e.style.fontSize = newSizeH6 + 'px');
    } else {
        textSize = 8;
    }



}

downFont = () => {

    if (textSize > 0) {
        textSize--;
        let newSizeP = sizeP + textSize;
        let newSizeH4 = sizeH4 + textSize;
        let newSizeH5 = sizeH5 + textSize;
        let newSizeH6 = sizeH6 + textSize;

        console.log('Text Size: ' + textSize);
        console.log('p1 Size: ' + newSizeP);
        console.log('h4 Size: ' + newSizeH4);

        localStorage.setItem('textSize', textSize);
        //alert('Funciono ');
        document.querySelectorAll('p').forEach(e => e.style.fontSize = newSizeP + 'px');
        document.querySelectorAll('h4').forEach(e => e.style.fontSize = newSizeH4 + 'px');
        document.querySelectorAll('h5').forEach(e => e.style.fontSize = newSizeH5 + 'px');
        document.querySelectorAll('h6').forEach(e => e.style.fontSize = newSizeH6 + 'px');
    } else {
        textSize = 0;
    }

}



btn_Up.addEventListener('click', upFont);
btn_Down.addEventListener('click', downFont);

