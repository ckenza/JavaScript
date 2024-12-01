// Objets

//exo 1

const billyTheCat = {
    name: "billy",
    color: "black",
    favouriteFoods: ["fish", "chicken"],
    isHungry: true,
    meow: function () {
        return "Meeeeeeeow";
    }
}

console.log(billyTheCat)


//exo 2

//let c = prompt(billyTheCat.color);
//console.log(c)


// exo 3

const animals = [
    { name: "kitty", species: "cat", noise: "meow" },
    { name: "skaly", species: "squale", noise: "frrrrrr" },
    { name: "wormy", species: "worm", noise: "????" },
    { name: "Pikatchue", species: "electrick mouse", noise: "pikaaaaa" }
];

console.log(animals[3])


// exo 4

console.log(animals[animals.length -1])


// exo 5

delete animals[1].name
delete animals[2].species

console.log(animals[1])
console.log(animals[2])

// exo 6

ab = animals[0].name
animals[0].name = animals[3].name
animals[3].name = ab

console.log(animals[0])
console.log(animals[3])


// exo 7

const apple = {
    isEaten: false,
    eat: function () {
        return this.isEaten ? "le fruit a déjà été mangé" : this.isEaten = true;
    }
};

apple.eat()
console.log(apple.eat())



//function test(a,b) {
//    return b/a;
//}

//console.log(test(10,2));






//let AppelMaman = false
//function test2() {
//    return appelMaman ? "c'est bon je l'ai fait" : appelMaman = true
//}

//console.log(test2());



