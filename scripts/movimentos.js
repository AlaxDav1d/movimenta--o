var x = 0;
var y = 0;
var item = document.getElementById("objeto");
var maxX = window.innerWidth - item.clientWidth;
var maxY = window.innerHeight - item.clientHeight;

window.addEventListener('keydown', function(movimento) {
    /*esquerda = 37  cima = 38 baixo = 40*/
    var tecla = movimento.keyCode;
  
    if (tecla == "39") {
        // Movimento para a direita
        if (x < maxX) {
            x = x + 5;
            item.style.left = x + "px";
        }
    }
    if(tecla == "37") {
        // Movimento para a esquerda
        if (x > 0) {
            x = x - 5;
            item.style.left = x + "px";
        }
    };
    if(tecla == "38") {
        // Movimento para cima
        if (y < maxY) {
            y = y + 5;
            item.style.bottom = y + "px";
        }
    };
    if(tecla == "40") {
        // Movimento para baixo
        if (y > 0) {
            y = y - 5;
            item.style.bottom = y + "px";
        }
    }

    // Verificar limites superior e direito
    if (x > maxX) {
        x = x - 5;
        item.style.left = x + "px";
    }
    if (y > maxY) {
        y = y - 5;
        item.style.bottom = y + "px";
    }
});
