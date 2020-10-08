const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const habilidades = (objeto) => {
    for (index = 0; index < Object.keys(objeto).length; index += 1) {
        const chave = Object.keys(objeto)[index];
        console.log(`${chave}, Nível: ${objeto[chave]}`)
    }
  }

  habilidades(student2)
  console.log("____________________")
  habilidades(student1)
  console.log("____________________")
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(i in arrayOfSkills){
      console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  console.log("____________________")
  console.log('Estudante 2');
  listSkills(student2);