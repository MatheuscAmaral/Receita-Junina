const valorElemento = document.getElementById('valor');
const valorReplicado = document.getElementById('valor-replicado');
const valorReplicado2 = document.getElementById('valor-replicado2');
const valorReplicado3 = document.getElementById('valor-replicado3');

function replicarValor(valor) {
    valorReplicado.innerText = valor;
}

function replicarValor2(valor) {
    valorReplicado2.innerText = valor;
}

function replicarValor3(valor) {
    valorReplicado3.innerText = valor;
}

document.getElementById('mais').addEventListener('click', () => {
    let valorAtual = parseInt(valorElemento.innerText);

    valorAtual++;
    valorElemento.innerText = valorAtual;

    replicarValor(valorAtual + ' espiga de milho verde');
    replicarValor2(valorAtual + ' colher de sopa de açúcar');
    replicarValor3(valorAtual + ' colher de sopa de manteiga');
})

document.getElementById('menos').addEventListener('click', () => {
    let valorAtual = parseInt(valorElemento.innerText);

    if (valorAtual == 1) {
        alert('Não é possível ter 0 porções');
    }

    else {
        valorAtual = valorAtual - 1
        valorElemento.innerText = valorAtual;
    }

    
    replicarValor(valorAtual + ' espiga de milho verde');
    replicarValor2(valorAtual + ' colher de sopa de açúcar');
    replicarValor3(valorAtual + ' colher de sopa de manteiga');
})