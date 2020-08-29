let numbers = []

for (let i = 1; i <= 25; i += 1){
    numbers.push(i)
}
let divisão = 0
for (let j = 0; j < numbers.length; j += 1){
    divisão = numbers[j] / 2
    console.log(divisão)
}