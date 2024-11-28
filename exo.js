// exo 1

//let answer = prompt("Please enter : 'Sphinx'");

//if (answer === 'Sphinx'){
//    console.log("Vive l'Egypte")
//}
//else {
//    console.log("De toute façon je ne comprends rien aux cartes");
//}


// exo 2

//const comparedString = "secret"
//let password = prompt("Please enter your password : ");

//if (password === comparedString){
//    console.log("Bienvenue BG ! 🙌")
//}
//else{
//    console.log("C'est NON 🦄")
//}


// exo 3

//let age3 = prompt("How old are you ?")

//if(age3 < 3){
//    console.log("Hello, Baby 🍼!");
//} else if(age3 < 18){
//    console.log("Hi! 👋");
//} else if(age3 > 100){
//    console.log("Greetings 🖖")
//} else {
//    console.log("Wow... 😲")
//};


// exo 4

//let firstName2 = prompt("What's your name ?")
//let age4 = prompt("How old are you ?")

//if(firstName2 === "Bruno" && age4 == 30){
//    console.log("Welcome");
//} else {
//    console.log("Go away");
//};



// exo 5

const b = new Date();
let day = b.getDay();

switch(day){
    case 1:
        console.log("dimanche");
        break;
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3:
        console.log("mercredi");
        break;
    case 4:
        console.log("jeudi");
        break;
    case 5:
        console.log("vendredi");
        break;
    case 6:
        console.log("samedi");
        break;
}


// exo 6

const animal = {
    name: "Lucky",
    specie: "Cat",
    color: "Black"
}

animal.name === "Lucky" ? console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...");



// exo 7

const n1 =  1
const n2 =  13
const n3 =  20
const n4 =  41
const n5 =  70
const n6 =  100

if (n1 % 2 === 0) {
    console.log(n1 + ' est paire ✅');
} else {
    console.log(n1 + " est Impaire ❌");
}


if (n2 % 2 === 0) {
    console.log(n2 + ' est paire ✅');
} else {
    console.log(n2 + " est Impaire ❌");
}


if (n3 % 2 === 0) {
    console.log(n3 + ' est paire ✅');
} else {
    console.log(n3 + " est Impaire ❌");
}


if (n4 % 2 === 0) {
    console.log(n4 + ' est paire ✅');
} else {
    console.log(n4 + " est Impaire ❌");
}


if (n5 % 2 === 0) {
    console.log(n5 + ' est paire ✅');
} else {
    console.log(n5 + " est Impaire ❌");
}


if (n6 % 2 === 0) {
    console.log(n6 + ' est paire ✅');
} else {
    console.log(n6 + " est Impaire ❌");
}
