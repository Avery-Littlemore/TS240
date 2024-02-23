type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal2 = Elephant | Tiger | Peacock;

function describeAnimal2(animal: Animal2): string {
  switch (animal.kind) {
    case 'elephant':
      return `An elephant weighs ${animal.weight}kg.`;
    case 'tiger':
      return `A tiger runs ${animal.speed}mph.`;
    case 'peacock':
      return `A peacock has feathers as long as ${animal.featherLength}.`
    default:
      const _exhaustiveCheck: never = animal;
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }
}

