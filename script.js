//div that holds all boxes
const div = document.querySelector('#grid');
let innerdiv;
let squares;
//creates grid
createGrid(16, 16);
function createGrid(rows, columns) {
    squares = rows * columns;
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





//prompt for button
var button = document.getElementById('button');

button.addEventListener('click', function () {
    var input = prompt('How many columns and rows would you like the grid to have?');
    if (input > 100) {
        alert('Please select a number less than 100');
    } else if (input <= 100 && input > 1) {
        document.getElementById('grid').textContent = '';
        createGrid(input, input);
    }
});

