
function conferirPalindromo(palavra){
    let conferencia = palavra.split("");
    let palindromo = conferencia.reverse();

    if(palavra == palindromo.join("")){
        console.log("true")
    } else {
        console.log ("false")
    }
}

console.log(conferirPalindromo("oso"))
