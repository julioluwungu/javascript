let vetor = []
let div = document.createElement('div')
let formulario = document.getElementsByTagName('form')[0]
let sel = document.getElementById('seldados')
let num = document.getElementById('numero')
formulario.appendChild(div)

function clicou() {
    div.innerHTML = ''
    let numero = Number(num.value)
    let opcao = document.createElement('option')
    if (vetor.indexOf(numero) != -1 || numero > 100 || numero < 1) {
        window.alert('Valor inválido ou já adicionado na lista!')
    } else {
        vetor.push(numero)
        opcao.innerHTML = `Valor ${numero} adicionado`
        sel.appendChild(opcao)
    }

    num.value = ''
    num.focus()
}

function resultado() {
    if (vetor.length != 0) {
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        let media = soma / vetor.length

        div.innerHTML = `Ao todo temos ${vetor.length} números cadastrados.<br>`
        div.innerHTML += `O maior valor informado foi ${maior}.<br>`
        div.innerHTML += `O menor valor informado foi ${menor}.<br>`
        div.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        div.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.<br>`
    } else {
        window.alert('Adicione valores antes de finalizar!')
    }
}

function limpar() {
    div.innerHTML = ''
    sel.innerHTML = ''
    vetor = []
}