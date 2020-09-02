let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = `sim`;

  let info2 = {
      personagem: `Tio Patinhas`,
      origem: `Christimas on Bear Mountain, Dell's Four Color Comics #178`,
      nota: `O último MacPatinhas`,
      recorrente: `sim`
  }

for (key in info, info2)
        
        console.log(`${info[key]}, ${info2[key]}`)
