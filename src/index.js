import cipher from './cipher.js';
//cipher.descifrado("B", 1)


/*id de la sección cifrado*/

let texto = document.getElementById("denuncia");
let posicion = document.getElementById("desplazamiento");
let btncifrado = document.getElementById("btncifrado1")
let resultado = document.getElementById("textoCifrado");



texto.addEventListener("keyup", function() {
    texto.value = texto.value.toUpperCase();

});



/*Un evento es inutil sino se le asigna alguna función, en este caso el 
evento "click" invoca la función de cifrar por medio de btncifrado1()*/

btncifrado.addEventListener("click", btncifrado1)


function btncifrado1() {
    let textoIngresado = texto.value;
    let numeroIngresado = posicion.value;
    let resultadoCifrado = resultado.value = cipher.cifrado(textoIngresado, numeroIngresado);
}


/*id de la sección descifrado*/

let textoCifrado = document.getElementById("denunciaCifrada");
let btndescifrado = document.getElementById("btndescifrado1")
let salida = document.getElementById("textoDescifrado");

textoCifrado.addEventListener("keyup", function() {
    textoCifrado.value = textoCifrado.value.toUpperCase();

});



btndescifrado.addEventListener("click", btndescifrado1)

function btndescifrado1() {
    let textoIngresado2 = textoCifrado.value;
    let posicionActual = posicion.value;
    let mensajeFinal = salida.value = cipher.descifrado(textoIngresado2, posicionActual);
}

/*Necesitamos 2 "parametros" para que la función descifrado 
tome los 2 valores de: mensaje cifrado y además la posición en la 
cual se encuentra cada letra (por eso salía undefined) ya que como parametro solo estaba
textoIngresado2*/

/*function btndescifrado1() {
    let textoIngresado2 = textoCifrado.value;
    let resultadoDescifrado = resultado2.value = cipher.descifrado(textoIngresado2);
}*/