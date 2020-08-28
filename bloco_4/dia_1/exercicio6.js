let pecaXadrex = "REI";
let movimento = pecaXadrex.toLowerCase();

switch(movimento){
    case 'peão':
        console.log("Movimenta somente para frente")
    break;
    
    case "torre":
        console.log("Movimenta em linha reta horizontalmente e verticalmente")
    break;

    case "cavalo":
        console.log("Movimenta em forma de 'L'")
    break;

    case "bispo":
        console.log("Movimenta em linha reta diagonalmente")
    break;

    case "rainha":
        console.log("Movimenta qualquer numero de casas em linha reta - verticalmente, horizontalmente ou diagonalmente")
    break;

    case "rei":
        console.log("Movimenta para qualquer casa adjacente")
    break;

    default:
        console.log();
}