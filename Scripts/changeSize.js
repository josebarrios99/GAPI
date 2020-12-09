const btn_largeFont = document.getElementById('btn_largeFont');
const bnt_smallFont = document.getElementById('btn_smallFont');
var sizeP = 16;
var sizeH1;
var sizeH2;
var sizeH3;
var sizeH4 = 34;
var sizeH5 = 24;
var sizeH6 = 20;
var modTxt = 0;

changeLarge = () =>{
    modTxt++;    

chageTxt();
}
chageSmall = () => {
    modTxt--;
chageTxt();
}

chageTxt = () =>{

    let newPsize = sizeP + modTxt;
    let newH1size = sizeH1 + modTxt;
    let newH2size = sizeH2 + modTxt;
    let newH3size = sizeH3 + modTxt;
    let newH4size = sizeH4 + modTxt;
    let newH5size = sizeH5 + modTxt;
    let newH5size = sizeH6 + modTxt;

    document.querySelectorAll('p').forEach(e => e.style.fontSize = newPsize+'px');
    document.querySelectorAll('h1').forEach(e => e.style.fontSize = newH1size+'px');
    document.querySelectorAll('h2').forEach(e => e.style.fontSize = newH2size+'px');
    document.querySelectorAll('h3').forEach(e => e.style.fontSize = newH3size+'px');
    document.querySelectorAll('h4').forEach(e => e.style.fontSize = newH4size+'px');
    document.querySelectorAll('h5').forEach(e => e.style.fontSize = newH5size+'px');
    document.querySelectorAll('h6').forEach(e => e.style.fontSize = newH6size+'px');



}

btn_largeFont.addEventListener('click',changeLarge);
bnt_smallFont.addEventListener('click',changeSmall);
