// Create two interfaces Dog with bark() and Cat with meow(). Make a new type Pet that is an intersection of Dog and Cat. 
// Then instantiate a Pet object.

// Expected output:

interface Dog {
  bark(): void,
}

interface Cat {
  meow(): void,
}

type Pet = Dog & Cat

let pet: Pet = {
  bark: () => console.log('woof'),
  meow: () => console.log('meow'),
}

pet.bark();
// Output should be "Woof"
pet.meow();
// Output should be "Meow"