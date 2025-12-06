const data = [
  {
    name: "Carlos",
    age: 24,
    salary: 9000,
    active: true,
    team: "FullStack",
    bonus: 0,
  },
  {
    name: "Fernanda",
    age: 24,
    salary: 8000,
    active: true,
    team: "Frontend",
    bonus: 0,
  },
  {
    name: "Mimi",
    age: 15,
    salary: 4000,
    active: true,
    team: "Mobile",
    bonus: 0,
  },
  {
    name: "Nanda",
    age: 23,
    salary: 2000,
    active: true,
    team: "Backend",
    bonus: 0,
  },
  {
    name: "Cadu",
    age: 26,
    salary: 1000,
    active: false,
    team: "Backend",
    bonus: 0,
  },
];

// Find
// -percorre a lista e devolve o primeiro que satifaz a condição

const users0 = data.find((users) => {
  return users.age == 24;
});

console.log(users0);

// Filter
// -Percore o array e devolve todos que satisfazem a condição.
const users1 = data.filter((users) => {
  return users.salary >= 6000 && users.active;
});
console.log(users1);

// findIndex

const indexUser = data.findIndex((e) => {
  return e.name === "Cadu";
});
console.log(indexUser);
console.log((data[indexUser].name = "Eduardo"));
console.log(data);

// Map

const users2 = data.map((e, i) => {
  return console.log(`Olá ${e.name} você está na posicão ${i}`);
});

const users3 = data.map((e) => {
  if (e.salary <= 2000) {
    (e.salary += 500), (e.bonus += 1);
  }

  return {
    name: e.name,
    salary: e.salary,
    bonus: e.bonus,
  };
});
console.log(users3);

// users = data.map((e) => {
//   if (e.salary <= 1500) {
//     e.name = e.name + " segundo nome"
//   }
//   return {
//     name: e.name,
//     salary: e.salary
//   }
// })
// console.log(users);

//Some
// Retorna true ou false caso pelo menos 1 item satisfaz a condição proposta.
usersSome = data.some((e) => {
  if (e.salary > 9000) {
    return {
      name: e.salary,
    };
  }
});
console.log(usersSome);

//Every
// Retorna true se todos satisfazem a condição passada. caso contrario retorna false.
usersEvery = data.every((e) => {
  if (e.salary > 500) {
    return e.name;
  }
});
console.log(usersEvery);

//Reduce
// reduz o array de objetos
const usersReduce = data.reduce((e, user) => {
  return (
    e += user.salary
  );
},0);
console.log(usersReduce);
