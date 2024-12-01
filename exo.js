// Tableaux


const characterNames = [
    "63AIS",
    "A'misandra",
    "Amimari",
    "Alika",
    "54B2",
    "A'merpact",
    "Amazora",
];

// exo 1

console.log(characterNames.length)


// exo 2

console.log(characterNames[0])


// exo 3

console.log(characterNames[6])


// exo 4

console.log(characterNames[characterNames.length - 1])


// exo 5

console.log(characterNames)


// exo 6

for (i = 0; i < characterNames.length; i++){
    console.log(characterNames[i], characterNames.indexOf(characterNames[i]))
}


// exo 7

for (i = 0; i < characterNames.length; i++){
    console.log(characterNames[i].toLowerCase())
};



// exo 8

let g = 0;

for (let i = 0; i < characterNames.length; i++){

    if( (characterNames[i].includes("a")) || characterNames[i].includes("A") === true){
        g += 1
    };

};

console.log(g);



// exo 9

function searchAndStore(needle) {
    const lowerCaseNeedle = needle.toLowerCase(); 
    const results = []; 

    for (const name of characterNames) {
        if (name.toLowerCase().includes(lowerCaseNeedle)) {
            results.push(name); 
        };
    };

    console.log("Résultats trouvés :", results);
    
    return results;
};



// exo signes astro

const aries = `♈`;
const taurus = `♉`;
const gemini = `♊`;
const cancer = `♋`;
const leo = `♌`;
const virgo = `♍`;
const libra = `♎`;
const scorpio = `♏`;
const sagittarius = `♐`;
const capricorn = `♑`;
const aquarius = `♒`;
const pisces = `♓︎`;


const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];


// etape 1
fireSigns.push(sagittarius);
console.log(fireSigns)

// etape 2

earthSigns.pop(sagittarius)
console.log(earthSigns)

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");


// etape 3

let zodiacSigns = [];
console.log(zodiacSigns);


// etape 4

zodiacSigns =  fireSigns.concat(earthSigns, waterSigns,airSigns)
console.log(zodiacSigns);

console.log(
  (zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒")
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);


// etape 5

console.log(zodiacSigns.length)



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

