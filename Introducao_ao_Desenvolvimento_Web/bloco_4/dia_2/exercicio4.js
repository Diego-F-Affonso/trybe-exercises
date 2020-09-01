let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0

for (let i = 0; i < numbers.length; i += 1){
    resultado += numbers[i];
}
console.log(resultado)

let mediaAritmetica = resultado / numbers.length 

console.log(mediaAritmetica)

if (mediaAritmetica > 20){
    console.log(`Valor maior que 20`);
}
else {
    console.log(`Valor menor ou igual a 20`)
}