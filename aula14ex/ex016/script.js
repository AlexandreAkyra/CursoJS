function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.getElementById('resultado')

    resultado.innerHTML = 'Contando:</br>'
    if (inicio == 0) {
        alert('Por favor digite um início válido')
    } else if (fim == 0) {
        alert('Por favor digite um fim válido')
    } else if (passo == 0) {
        alert('Passo inválido, considerando passo 1')
        passo = 1
        while (inicio <= fim) {
            resultado.innerText += inicio + ' 👉 '
            inicio += passo
        }
    } else {
        while (inicio <= fim) {
            resultado.innerHTML += inicio + ' 👉 '
            inicio += passo
        }
    }
    resultado.innerHTML += ' 🏁'
    
}