function gerarTabuada() {
    let num = document.getElementById('txtnum').value
    let tabuada = document.getElementById('seltab')

    if (num.length == 0) {
        window.alert('Por favor, digite um valor.')
    } else {
        num = Number(num)
        tabuada.innerHTML = ''
        c = 1
        while (c <= 10) {
            let opcao = document.createElement('option')
            opcao.value = `tab${c}`
            opcao.innerHTML = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(opcao)
            c++
        }
    }
}