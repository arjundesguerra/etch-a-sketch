//div that holds all boxes
const div = document.querySelector('#grid');
let innerdiv;

//creates grid of 16x16 sqaurres
createGrid(16,16);
function createGrid(rows, columns) {
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        innerdiv = document.createElement('div');
        innerdiv.id = ('innerdiv');
        div.appendChild(innerdiv)
        //listens for a mouseover a div, then turns the background color black
        innerdiv.addEventListener("mouseover", function() {
            this.style.backgroundColor = 'black';
        });
        }   
    }   
}


 