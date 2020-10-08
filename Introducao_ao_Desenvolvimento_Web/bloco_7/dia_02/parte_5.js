// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

//Object.assign(destino, objeto1);
//Object.assign(destino, objeto1, objeto2);
//Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  const person2 = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person2, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person2); // { name: 'Roberto', lastName: 'Silva' }