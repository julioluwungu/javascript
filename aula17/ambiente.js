let amigo = {nome: 'José',
    sexo: 'M',
    idade: 20,
    peso: 85.7,
    engordou(p=0) {
        console.log('Engordou!')
        this.peso += p
    }}

console.log(amigo)