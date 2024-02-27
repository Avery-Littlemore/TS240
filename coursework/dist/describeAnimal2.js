"use strict";
function describeAnimal2(animal) {
    switch (animal.kind) {
        case 'elephant':
            return `An elephant weighs ${animal.weight}kg.`;
        case 'tiger':
            return `A tiger runs ${animal.speed}mph.`;
        case 'peacock':
            return `A peacock has feathers as long as ${animal.featherLength}.`;
        default:
            const _exhaustiveCheck = animal;
            throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }
}
