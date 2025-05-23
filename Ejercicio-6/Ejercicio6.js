const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const validacionNombre = document.getElementById("nombreValidacion");
const validacionApellido = document.getElementById("apellidoValidacion");
const validacionEdad = document.getElementById("edadValidacion");
const validacionAltura = document.getElementById("alturaValidacion");
const validacionCorreo = document.getElementById("correoValidacion");
const boton = document.getElementById("Boton");


boton.addEventListener("click", mostrarDatos);

function mostrarDatos() {
    validacionNombre.classList.remove("correcto");
    validacionNombre.classList.remove("incorrecto");
    validacionApellido.classList.remove("correcto");
    validacionApellido.classList.remove("incorrecto");
    validacionEdad.classList.remove("correcto");
    validacionEdad.classList.remove("incorrecto");
    validacionAltura.classList.remove("correcto");
    validacionAltura.classList.remove("incorrecto");
    validacionCorreo.classList.remove("correcto");
    validacionCorreo.classList.remove("incorrecto");
    
    const nombreValue = nombre.value;
    if (nombreValue.length === 0 || nombreValue === nombreValue.length > 50) {
        validacionNombre.innerText = "El nombre no debe estar vacío.";
        validacionNombre.classList.add("incorrecto");
    }else{
        validacionNombre.innerText = nombreValue;
        validacionNombre.classList.add("correcto");
    }

    const apellidoValue = apellido.value;
    if (apellidoValue.length === 0) {
        validacionApellido.innerText = "El apellido no debe estar vacío.";
        validacionApellido.classList.add("incorrecto");
    }else if (apellidoValue.length > 50) {
        validacionApellido.innerText = "El maximo son 50 caracteres.";
        validacionApellido.classList.add("incorrecto");
    }else{
        validacionApellido.innerText = apellidoValue;
        validacionApellido.classList.add("correcto");
    }

    const edadValue = edad.value;
    if (edadValue < 0) {
        validacionEdad.innerText = "La edad no puede ser negativa.";
        validacionEdad.classList.add("incorrecto");
    }else if (edadValue < 18) {
        validacionEdad.innerText = "No puede ser menor de edad.";
        validacionEdad.classList.add("incorrecto");
    }else{

        validacionEdad.innerText = edadValue;
        validacionEdad.classList.add("correcto");
    }

    const alturaValue = altura.value;
    if (alturaValue <= 0) {
        validacionAltura.innerText = "La altura no puede ser cero o negativa.";
        validacionAltura.classList.add("incorrecto");
    }else if (alturaValue > 230) {
        validacionAltura.innerText = "La altura no puede ser mayor a 230 cm.";
        validacionAltura.classList.add("incorrecto");
    }else{
        validacionAltura.innerText = alturaValue + " cm";
        validacionAltura.classList.add("correcto");
    }

    const correoValue = correo.value;
    if (correoValue.length === 0 ) {
        validacionCorreo.innerText = "El correo no debe estar vacío.";
        validacionCorreo.classList.add("incorrecto");
    }else if (!correoValue.includes("@")) {
        validacionCorreo.innerText = "El correo debe incluir un '@'.";
        validacionCorreo.classList.add("incorrecto");
    }else{
        validacionCorreo.innerText = correoValue;
        validacionCorreo.classList.add("correcto");
    }
}