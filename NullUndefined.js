let valor  //nao inicializada
console.log(valor)
valor = null //ausencia de valor e para zerar a variavel!
console.log(valor)
 // console.log(valor.toString()) //erro!

const produto = {}
console.log(produto.preco)

produto.preco =3.50
console.log(produto)

produto.preco =undefined //evitar atribuir undefined USAR EM ULTIMO CASO !!
console.log(!!produto.preco)
 // delete produto.preco
console.log(produto)

produto.preco = null // sem preço

console.log(produto)
