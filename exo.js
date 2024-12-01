// Boucles

// exo 1

for(let i = 1; i < 51; i++){
    console.log("Tour numéro " + i);
};


// exo 2

for(let i = 1; i < 101; i++){

    console.log(i);

    if(i === 1){
        console.log("Tour " + i + " : Zé bartiii, c'est à conducteur 1️⃣ de démarrer")
    };

    if(i === 25){
        console.log("Tour " + i + " : Il faut changer de conducteur, c'est à conducteur 2️⃣")
    };

    if(i === 50){
        console.log("Tour " + i + " : Il faut changer de conducteur, c'est à conducteur 1️⃣")
    };

    if(i === 75){
        console.log("Tour " + i + " : Il faut changer de conducteur, c'est à conducteur 2️⃣")
    }; 

    if(i === 100){
        console.log("Tour " + i + " : C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎")
    };
};


// exo 3

let reserve = 74;
let fuel = 0;


for(let i = 0; i < 102; i++){

    console.log("Tour numéro " + i + ", Fuel restant : " + reserve);
    reserve -= 7;
    if(reserve < 4){
        console.warn("Attention carburant à recharger au prochain tour⛽️");
        reserve = 67
        fuel ++
        console.warn("Le refuel a été fait 🙌😎");  
    };

};

console.log("Nombre total de fuel : " + fuel);
