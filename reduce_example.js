const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 1
    }
]

/*const totalWeitght = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeitght)*/

/*const totalWeitght = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeitght)*/

const totalWeitghtDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeitghtDogs)

/*const dogs = pets.filter((pet) => {
    return pet.type === 'dog'
})*/

//console.log(dogs)

/*const totalWeitghtDogs = dogs.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeitghtDogs)*/
