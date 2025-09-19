function verificar() {
    var ano_atual = new Date().getFullYear()
    var ano_nas = document.getElementById('ano').value
    var sexo = document.getElementsByName('sexo')
    var res = document.querySelector('div#res')
    var idade = ano_atual - ano_nas
    var imagem = document.createElement('img')

    if (ano_nas >= 1900 && ano_nas <= ano_atual) {
        if (sexo[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade <= 10) {
                imagem.setAttribute('src', 'imagens/foto-crianca-m.jpg')
            } else if (idade <= 21) {
                imagem.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade <= 50) {
                imagem.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
                imagem.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade <= 10) {
                imagem.setAttribute('src', 'imagens/foto-crianca-f.jpg')
            } else if (idade <= 21) {
                imagem.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade <= 50) {
                imagem.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
                imagem.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)
    } else {
        window.alert('[ERRO] Dado inválido. Por favor, tente novamente!')
    }
}   