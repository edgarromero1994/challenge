var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector(".texto-resultado");
var palabraOcultar = document.querySelector(".palabra-ocultar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto.trim() === "") {
        mostrarMensaje("Ingrese una palabra para encriptar.");
        return;
    }
    var textoEncriptado = encriptarTexto(cajatexto);
    resultado.textContent = textoEncriptado;
    verPalabraOcultar(textoEncriptado);
}

function desencriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto.trim() === "") {
        mostrarMensaje("Ingrese una palabra para desencriptar.");
        return;
    }

    var textoDesencriptado = desencriptarTexto(cajatexto);
    resultado.textContent = textoDesencriptado;

    verPalabraOcultar(textoDesencriptado);
}

function verPalabraOcultar(texto) {
    if (texto.trim() !== "") {
        palabraOcultar.style.display = "none";
    } else {
        palabraOcultar.style.display = "block";
    }
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    
    if (contenido.trim() === "") {
        mostrarMensaje("No hay nada para copiar.");
        return;
    }
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});

function mostrarMensaje(mensaje) {
    var mensajeModal = document.getElementById("mensaje-modal");
    var mensajeAlerta = document.getElementById("mensaje-alerta");

    mensajeAlerta.textContent = mensaje;

    // Mostrar el modal
    mensajeModal.style.display = "flex";

    // Ocultar el modal después de 3 segundos
    setTimeout(function () {
        mensajeModal.style.display = "none";
        mensajeAlerta.textContent = "";
    }, 3000);
}

//para eliminar 

var botonEliminar = document.querySelector(".btn-eliminar");

botonEliminar.addEventListener("click", eliminarPalabras);



function eliminarPalabras() {
    var resultado = document.querySelector(".texto-resultado");
    var contenido = resultado.textContent;

    if (contenido.trim() === "") {
        mostrarMensaje("No hay nada para eliminar.");
        return;
    }

    resultado.textContent = "";

    var cajaTexto = document.querySelector(".cajatexto");
    cajaTexto.value = "";

    var palabraOcultar = document.querySelector(".palabra-ocultar");
    palabraOcultar.style.display = "flex";
}

//para calcular el año 
var year = new Date().getFullYear();
document.getElementById("year").textContent = year;