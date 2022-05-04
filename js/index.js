const name = document.createElement('div')
const age = document.createElement('div')
const description = document.createElement('div')

fetch ('http://localhost:3000/monsters')
.then(r => r.json()) 
.then(monstersArray => {
    renderMonsters(monstersArray)

});

function renderMonsters(monstersArray) {
    monstersArray.forEach(monstersObj => {
        name.textContent = monstersArray.name
        age.textContent = monstersArray.age
        description.textContent = monstersArray.description
    });
}



const firstFifty = monstersObj => {
   
}
