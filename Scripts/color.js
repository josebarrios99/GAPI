const colors = document.getElementById('colors');

let i;
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListenr('click', changecolor)
}
function changecolor(value){
    
    document.documentElement.style.setProperty('--color', value);
}