// Modifier des éléments
// exo 1

const div = document.createElement('div');
const heroSection = document.getElementById('hero-section');

const myh3 = document.createElement('h3');
myh3.id = "monH3";
myh3.innerText = "My h3 title";

const myfirstp = document.createElement('p');
myfirstp.innerText = "I created this div with JavaScript";

const button = document.createElement('button');
button.classList.add("btn");
button.innerText = "My 1er button";


div.appendChild(myh3);
div.appendChild(myfirstp);
div.appendChild(button);
heroSection.appendChild(div);


// exo 2

const menu = document.querySelector('#menu');

function liCreation(string){
    li = document.createElement('li');
    li.innerHTML = string;
    menu.appendChild(li);
    return li;
};

liCreation("Item 1");
liCreation("Item 2");
liCreation("Item 3");
liCreation("Item 4");
liCreation("Item 5");


// exo 3

const menu2 = document.createElement('ul');
menu2.id = "menu2";
const header = document.querySelector('header');
header.appendChild(menu2)


function createMenuItem(string){
    li = document.createElement('li');
    li.innerHTML = string;
    menu2.appendChild(li);
};

createMenuItem("1 Item");
createMenuItem("2 Item");
createMenuItem("3 Item");



// exo 4

//Déplacer le premier et le dernier élément de la première liste (menu) dans la seconde liste (menu2)

const li1 = document.querySelector('#menu li');
const liLast = menu.lastElementChild
menu2.appendChild(li1);
menu2.appendChild(liLast)
// console.log(menu2);


// exo 5

li1.innerText = "4 Item";
liLast.innerText = "5 Item";


// exo 6

const myH1 = document.querySelector("h1");
myH1.remove()


// exo 7


const elementListToCreate = [
    {
       name: "section",
       times: 3
    },
    {
       name: "div",
       times: 3
    },
    {
       name: "p",
       times: 1
    },
    {
       name: "span",
       times: 3
    },
];

const body = document.querySelector('body');


for(let i = 0; i < elementListToCreate[0].times; i++){
    const section = document.createElement(elementListToCreate[0].name);
    body.appendChild(section);
    for(let i = 0; i < elementListToCreate[1].times; i++){
        const div1 = document.createElement(elementListToCreate[1].name);
        section.appendChild(div1);
        for(let i = 0 ; i < elementListToCreate[2].times; i++){
            const p1 = document.createElement(elementListToCreate[2].name);
            p1.innerText = "That's a paragraph";
            div1.appendChild(p1);
            for(let i = 0; i < elementListToCreate[3].times; i++){
                const span = document.createElement(elementListToCreate[3].name);
                span.classList.add("span-a")
                p1.appendChild(span);
            };
        };
    };
};



// exo 8

const allSpan = document.querySelectorAll(".span-a");
console.log(allSpan);


for(let i = 0; i < allSpan.length +1; i++){
    allSpan[i].innerText = `Je suis le span numéro ${i + 1}`;
};










