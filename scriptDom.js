// Sélectionner des éléments

// exo 1

const mySecondSection = document.getElementById('our-services');
console.log(mySecondSection);

const mySecSection = document.getElementsByTagName('section');
console.log(mySecSection[1]);

console.log('----');


// exo 2

const myInputs = document.getElementsByTagName('input');
console.log(myInputs[0].value);
console.log(myInputs[1].value);

console.log('---');


// exo 3

const myH3 = document.getElementsByTagName('h3');
console.log(myH3[1]);

console.log('---');


// exo 4

const allbtn = document.getElementsByClassName('btn');
console.log(allbtn);
console.log(allbtn.length);

const allctabtn = document.getElementsByClassName('cta-btn');
console.log(allctabtn);
console.log(allctabtn.length);

const allctaprimary = document.getElementsByClassName('cta-primary');
console.log(allctaprimary)
console.log(allctaprimary.length)

const allctasecondary = document.getElementsByClassName('cta-secondary');
console.log(allctasecondary);
console.log(allctasecondary.length);

const allbtnprimary = document.getElementsByClassName('cta-btn cta-primary')
console.log(allbtnprimary);
console.log(allbtnprimary.length);

const btnsecondary = document.getElementsByClassName('btn cta-btn cta-secondary');
console.log(btnsecondary);
console.log(btnsecondary.length);


console.log('---')


// exo 5

const allp = document.querySelectorAll('p');

for(let i = 0; i < allp.length; i++){
    console.log(allp[i]);
};

console.log('---');



// exo 6

// const mySecSection = document.getElementsByTagName('section');
console.log(mySecSection[0].parentElement);
console.log(mySecSection[0].firstElementChild);
console.log(mySecSection[0].lastElementChild);

// const mySecondSection = document.getElementById('our-services');
console.log(mySecondSection.previousElementSibling);
console.log(mySecondSection.nextElementSibling);


// exo 7


function totalTag(tags){
    let alltags = document.getElementsByTagName(tags);
    alltags = alltags.length;

    return alltags;
};


// return document.querySelectorAll(tagname).length;

totalTag('h1');
totalTag('h2');
totalTag('h3');
totalTag('p');
totalTag('section');
totalTag('div');

console.log(totalTag('h1') + totalTag('h2') + totalTag('h3') + totalTag('p') + totalTag('section') + totalTag('div'));
