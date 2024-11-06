function gerar() {
    var num = Number(document.getElementById('num').value)
    var tabela = document.getElementById('tabuada')
    var c = 1
    tabela.innerHTML = ' '
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        tabela.appendChild(item)
        c++
    }
}