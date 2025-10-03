function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')

    res.innerHTML = ''
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Dados inválidos!')
    } else {
        window.alert('OK!')
        /*
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (passo <= 0) {
            window.alert('Dado inválido. Considerando passo igual a 1')
            passo = 1
        }

        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} → `
            }
            res.innerHTML += 'FIM!'
        } else if (inicio > fim) {
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} → `
            }
            res.innerHTML += 'FIM!'
        } else {
            res.innerHTML += 'Impossível contar!'
        } */
    } 
}

function resetar () {
    res.innerHTML = 'Preparando a contagem...'
}