//div that holds all boxes
const div = document.querySelector('#grid');
let innerdiv;

//creates grid
createGrid(16, 16);
function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            innerdiv = document.createElement('div');
            innerdiv.id = ('innerdiv');
            div.appendChild(innerdiv)
            innerdiv.style.cssText = `height: calc(640px/${rows}); width: calc(640px/${columns});`;
            //listens for a mouseover a div, then turns the background color black
            innerdiv.addEventListener("mouseover", function () {
                this.style.backgroundColor = 'black';
            });
        }
    }
}

