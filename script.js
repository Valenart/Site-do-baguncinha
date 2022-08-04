const imgs = document.getElementById("imagens");
const imagens = document.querySelectorAll("#imagens imagens");

let idx = 0;

function carroseldefotos(){
    idx++;

    if(idx > imagens.length -1){
        idx = 0;
    }

    imgs.style.transform = "translateX()";
}

setInterval(carroseldefotos, 1800);