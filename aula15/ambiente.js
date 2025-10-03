let num = [2, 5, 7, 3, 4, 6]
num[6] = 8
num.push(1)
num.sort()

console.log(`Vector ${num}`)
console.log(`O vector possui ${num.length} posições`)

pos = num.indexOf(8)
console.log(`Posição: ${pos}`)
pos = num.indexOf(10)
console.log(`Posição: ${pos}`)