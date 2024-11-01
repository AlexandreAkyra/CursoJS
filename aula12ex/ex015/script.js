function verificador() {
    var date = new Date()
    var ano_atual = date.getFullYear()
    var nascimento = Number(document.getElementById('nascimento').value)
    var masculino = document.getElementById('masculino')
    var feminino = document.getElementById('feminino')
    var resultado = document.getElementById('resultado')
    var imagem = document.getElementById('imagem')
    var idade = 0
    
    if (nascimento > 1900 && nascimento < ano_atual) {
        idade = ano_atual - nascimento

        if (masculino.checked) {
        resultado.innerText = `Detectamos um Homem com ${idade} anos`
        if(idade <= 5) {
                imagem.innerHTML = '<img src="imagens/baby-m.jpg" alt="bebê">'
            } else if (idade <= 20) {
                imagem.innerHTML = '<img src="imagens/teenager-m.jpg" alt="bebê">'
            } else if (idade <= 30) {
                imagem.innerHTML = '<img src="imagens/adult-m.jpg" alt="bebê">'
            } else {
                imagem.innerHTML = '<img src="imagens/aged-m.jpg" alt="bebê">'
            }
        } else if (feminino.checked) {
            resultado.innerText = `Detectamos uma Mulher com ${idade} anos`
            if(idade <= 5) {
                imagem.innerHTML = '<img src="imagens/baby-f.jpg" alt="bebê">'
            } else if (idade <= 20) {
                imagem.innerHTML = '<img src="imagens/teenager-f.jpg" alt="bebê">'
            } else if (idade <= 40) {
                imagem.innerHTML = '<img src="imagens/adult-f.jpg" alt="bebê">'
            } else {
                imagem.innerHTML = '<img src="imagens/aged-f.jpg" alt="bebê">'
            }
        } else {
            alert('Por favor informe o sexo')     
    }
    } else {
        alert('Por favor insira uma data de nascimento válida')

    }   
}