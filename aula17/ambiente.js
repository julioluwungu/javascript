let amigo = {nome: 'José',
    sexo: 'M',
    idade: 20,
    peso: 85.7,
    engordar(p=0) {
        console.log('Engordou!')
        this.peso += p
    }
}

console.log(`Tipo: ${typeof(amigo)}`)
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)