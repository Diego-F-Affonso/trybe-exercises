const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maior = '';
  for (index = 0; index < palavras.length; index += 1) {
      if (palavras[index].length > maior.length) {
          maior = palavras[index]
      }
  }
  console.log(maior)
};

maiorPalavra("desenvolvimento palavra da frase");
