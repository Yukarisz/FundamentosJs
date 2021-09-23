function rand([min = 0 , max=1000]) {
 if (min>max) [min,max] = [max,min]
 const valor = Math.random() * (max-min) +min
 return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([900]))
console.log(rand([, 300]))
console.log(rand([]))
console.log(rand()) //nao funciona igual ao 3 . mesmo efeito!
