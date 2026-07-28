function voltar() {
    document.getElementById("botoes").style.display = "flex";
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("div1").style.display = "none";
}

function voltar1() {
    document.getElementById("botoes").style.display = "none";
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("div1").style.display = "none";
    document.getElementById("texto1").innerHTML = "Selecione seu caminho:";
}

function voltar2() {
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("div2").style.display = "none";
}

function voltar3() {
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("div3").style.display = "none";
}

function botaoR() {
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("botoes").style.display = "none";
}

function botaoR1() {
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("div1").style.display = "flex";
    document.getElementById("texto1").innerHTML = "Básico do Pré-Python";

}

function botaoR2() {
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("div2").style.display = "flex";

}

function botaoR3() {
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
}