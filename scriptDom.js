// Modifier des styles

// exo 1

let images = document.querySelectorAll("img");

images.forEach((img) => img.setAttribute('src', 'https://th.bing.com/th/id/OIP.gO8wyz4Cq9BQLpo21C1c4gHaGB?w=183&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'));
images.forEach((img) => img.setAttribute('style', "height:100%"));


// exo 2

const titleList = ["h1", "h2", "h3", "h4", "h5", "h6"];

titleList.forEach((title) => {
    const index = document.querySelectorAll(title);
    
    index.forEach((index) => {
        index.classList.add('title')

        if(title === 'h1'){
            index.classList.add('title1')
        } else if(title === 'h2'){
            index.classList.add('title2')
        } else if(title === 'h3'){
            index.classList.add('title3')
        };
    });

});


// exo 3

const main = document.querySelector('main');
const section2 = main.children[1];
section2.classList.add("section2");

const cardContainer = document.querySelector('section div:first-of-type');
cardContainer.classList.add('card-container');

const card = document.querySelectorAll('.card-container div');
card.forEach((element) => element.classList.add('card') )



// exo 4

main.style.cssText = "background-color: #fae5d3;"

section2.style.cssText = "background-color: #e9f7ef; padding: 10px; margin: 2px; display: flex; flex-direction: column;"

cardContainer.style.cssText = "border: solid 1px black; margin: auto; padding: 5px; display: flex; justify-content: space-between;"

card.forEach((eachOne) => eachOne.style.cssText = "border: dotted 2px brown; margin: auto; padding: 2px; display: flex; flex-direction: column; vertical-align: middle;")




// exo 6

 // 6 - Via JS, créer une <div> comme celles déjà présentes dans le HTML : avec sa classe, son style et ses éléments enfants. 
 // → Injecter cette <div> en tant que 4ème enfant de "card-container"
 
const div = document.createElement('div');
div.classList.add('card');
div.style.cssText = "background-color: #ebdef0; padding: 2px; display: flex; flex-direction: column;"
cardContainer.appendChild(div);

const img = document.createElement('img');
img.setAttribute('src', 'https://th.bing.com/th/id/OIP.gO8wyz4Cq9BQLpo21C1c4gHaGB?w=183&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7');
img.setAttribute('alt', 'armani logo');
div.appendChild(img);

const h3 = document.createElement("h3");
h3.innerText = "Titre 3"
div.appendChild(h3);

const p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto deserunt, in dicta est commodi eligendi, eaque molestiae, nisi esse repudiandae deleniti nulla quaerat tempore neque. Excepturi nostrum dicta illo debitis?"
div.appendChild(p);

const button = document.createElement("button");
button.innerText = "Click pour en savoir + 🤓"
div.appendChild(button);