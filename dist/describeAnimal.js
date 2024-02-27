"use strict";
function describeAnimal(animal) {
    switch (animal.kind) {
        case 'dog':
            return `${animal.name} is a ${animal.age} year old dog.`;
        case 'bird':
            return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
        default:
            throw new Error("Unknown animal species");
    }
}
