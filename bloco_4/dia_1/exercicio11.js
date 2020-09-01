let salarioBruto = 3000;
let salarioInss = 0;

if (salarioBruto <= 1556.94){
    salarioInss = salarioBruto - (salarioBruto * 8) / 100;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioInss = salarioBruto - (salarioBruto * 9) / 100;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioInss = salarioBruto - (salarioBruto * 11) / 100;
}
else {
    salarioInss = salarioBruto - 570.88
}

console.log(`O valor do salario bruto é: ${salarioBruto}.`)
console.log(`O valor do salario com o desconto do INSS é: ${salarioInss}.`)
let salarioLiquido = 0

if (salarioInss <= 1903.98){
    console.log(`Isento de imposto de renda`)
}
else if (salarioInss >= 1903.99 && salarioInss <= 2826.65){
    let descontoIr75 = (salarioInss * 7.5) / 100 - 142.80;
    console.log(`O valor do desconto do IR é: RS${descontoIr75}.`)
    salarioLiquido = salarioInss - descontoIr75;
}
else if (salarioInss >= 2826.66 && salarioInss <= 3751.05){
    let descontoIr15 = (salarioInss * 15) / 100 - 354.80;
    console.log(`O valor do desconto do IR é: RS${descontoIr15}.`)
    salarioLiquido = salarioInss - descontoIr15;
}
else if (salarioInss >= 3751.06 && salarioInss <= 4664.68){
    let descontoIr225 = (salarioInss * 22.5) / 100 - 636.13;
    console.log(`O valor do desconto do IR é: RS${descontoIr225}.`)
    salarioLiquido = salarioInss - descontoIr225;
}
else {
    let descontoIr275 = (salarioInss * 27.5) / 100 - 869.36;
    console.log(`O valor do desconto do IR é: RS${descontoIr275}.`)
    salarioLiquido = salarioInss - descontoIr275;
}

console.log(`O valor do salario liquido é: ${salarioLiquido}.`)