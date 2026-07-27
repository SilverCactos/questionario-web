function clear() {
    document.getElementById("botoes").style.display = "none";
}

function voltar() {
    document.getElementById("botoes").style.display = "flex";
    document.getElementById("resumos").style.display = "none";
}

function botaoR() {
    document.getElementById("resumos").style.display = "flex";
    clear();
}