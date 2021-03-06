const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  console.log(customer);

  customer.lastName = 'Faria';
  console.log(customer);

  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  console.log(customer2);

  customer2['lastName'] = 'Silva';
  console.log(customer2);


  const customer3 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer3[newKey] = lastName;

  newKey = 'fullName';
  const fullName = `${customer3.firstName} ${customer3.lastName}`;
  customer3[newKey] = fullName;

  console.log(customer3);
  