const Peso = document.getElementById("Peso");
const Altura = document.getElementById("Altura");
const Boton = document.getElementById("Boton");
const texto = document.getElementById("Texto");

Boton.addEventListener("click", calculoIMC);

function calculoIMC(){
        const pesofloat = parseFloat(Peso.value);
        const alturafloat = parseFloat(Altura.value);
        const indice = pesofloat / (alturafloat*alturafloat);
        texto.innerText = "Su indice de masa corporal es: " + indice;
        console.log(indice);
    }