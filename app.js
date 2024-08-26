
let input_text = "";
let result_text = "";


function encriptar() {
        mostrar__resultado();
        ocultar__mensaje();
        limpiarcampo();
    }

function limpiarcampo(){
    document.querySelector("#input_text").value = "";
}

function ocultar__mensaje(){
    var ocult__div1 = document.getElementById("div__inicial");
    ocult__div1.style.display = "none";
}

function mostrar__resultado(){
    var x = document.getElementById ("div__encriptado");
    x.style.visibility = "visible";
    let input_text = document.getElementById('input_text').value;
    //Para encriptar el texto
    var textNew = encriptarTexto(input_text);
    document.querySelector("#result__encriptado").value = textNew;
}

function copiarresultado(){
    //Para seleccionar el texto resultante
    const input = document.getElementById("result__encriptado");
    input.focus();
    input.setSelectionRange(0, 100);
    clipboard();
}

function clipboard(){
    //Para copiar al portapapeles lo seleccionado
    var copiarResult = document.querySelector("#result__encriptado").value;
    navigator.clipboard.writeText(copiarResult);

}
function encriptarTexto (input_text) {
    var txt = input_text;
    var textoFinal = "";

    for(var i = 0; i < txt.length; i++) {
        if(txt[i] == "a") {
            textoFinal = textoFinal + "%"
        }
        else if(txt[i] == "e") {
            textoFinal = textoFinal + "@"
        }
        else if(txt[i] == "i") {
            textoFinal = textoFinal + "#"
        }
        else if(txt[i] == "o") {
            textoFinal = textoFinal + "$"
        }
        else if(txt[i] == "u") {
            textoFinal = textoFinal + "&"
        }
        else{
            textoFinal = textoFinal + txt[i];
        }
    } 
    return textoFinal;   
}


function desencriptarTexto () {
    var txt = document.getElementById('input_text').value;
    var textoFinal = "";

    for(var i = 0; i < txt.length; i++) {
        if(txt[i] == "%") {
            textoFinal = textoFinal + "a"
        }
        else if(txt[i] == "@") {
            textoFinal = textoFinal + "e"
        }
        else if(txt[i] == "#") {
            textoFinal = textoFinal + "i"
        }
        else if(txt[i] == "$") {
            textoFinal = textoFinal + "o"
        }
        else if(txt[i] == "&") {
            textoFinal = textoFinal + "u"
        }
        else{
            textoFinal = textoFinal + txt[i];
        }
    }
    document.querySelector("#result__encriptado").value = textoFinal;
    document.querySelector("#input_text").value = "";
}