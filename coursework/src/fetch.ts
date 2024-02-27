interface Animal3 {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal3 {
  fetch(): string;
}

const myDog: Dog = { 
  name: 'Rex',
  makeSound: () => 'Generic animal sound',
  fetch: () => `Rex fetches a stick`,
};

console.log(myDog.fetch());