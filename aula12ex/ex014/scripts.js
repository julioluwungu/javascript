function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.jpg'
        txt.innerHTML = 'Bom Dia'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora < 18) {
        img.src = 'imagens/foto-tarde.jpg'
        txt.innerHTML = 'Boa Tarde'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'imagens/foto-noite.jpg'
        txt.innerHTML = 'Boa Noite'
        document.body.style.backgroundColor = '#515154'
    }
}