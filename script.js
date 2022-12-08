//div that holds all boxes
const div = document.querySelector('#grid');

function createGrid(num1, num2) {
    let prod = num1 * num2;
    for(let i = 0; i < prod; i++) {
        const innerdiv = document.createElement('div');
        innerdiv.classList.add('innerdiv');
        div.appendChild(innerdiv)
    }
}

 