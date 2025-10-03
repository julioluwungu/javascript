let valores = [2, 5, 6, 8, 3, 4]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}