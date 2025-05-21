const LadoA = document.getElementById("ladoA");
const LadoB = document.getElementById("ladoB");
const LadoC = document.getElementById("ladoC");
const Boton = document.getElementById("Boton");
const texto = document.getElementById("Texto");

Boton.addEventListener("click", calcularArea);

function calcularArea(){
    const LadoAfloat = parseFloat(LadoA.value);
    const LadoBfloat = parseFloat(LadoB.value);
    const LadoCfloat = parseFloat(LadoC.value);

    const areaRectangulo = LadoBfloat*LadoCfloat;
    const areaTriangulo = ((LadoAfloat-LadoCfloat)*LadoBfloat)/2;

    const area = areaRectangulo+areaTriangulo;
    texto.innerText = "El area del trapecio es=  " + area;
}