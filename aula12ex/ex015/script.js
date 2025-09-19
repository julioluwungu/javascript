function clicou() {
    var ano_atual = new Date().getFullYear()
    var imagem = document.getElementById('imagem')
    var texto = document.getElementById('txt')
    var ano_nas = document.querySelector('input#ano').value
    var mas = document.getElementById('mas').value
    var fem = document.getElementById('fem').value
    if (ano_nas >= 1900 && ano_nas <= 2025) {
        ano = ano_atual - ano_nas
        if (mas) {
            texto.innerHTML = `<p>Detectamos um homem com ${ano} anos de idade mas = ${mas} e fem = ${fem}`
            imagem.innerHTML = `<img src='imagens/foto-crianca.jpg'>`
        } else if (fem) {
            texto.innerHTML = `<p>Detectamos uma mulher com ${ano} anos de idade`
            imagem.innerHTML = `<img src='imagens/foto-crianca.jpg'>`
        } else {
            texto.innerHTML = `<p>Detectamos uma pessoa com ${ano} anos de idade`
            imagem.innerHTML = `<img src='imagens/foto-crianca.jpg'>`
        }
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
}