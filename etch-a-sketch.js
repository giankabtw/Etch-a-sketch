const container = document.querySelector("#container");
const clear = document.querySelector("#clear")

clear.addEventListener('click', () => {

	container.textContent = "";
	var userInput = prompt("Enter your grid Size")
	createGrid(userInput, userInput);

});


// Function creates 16 items 

function createGrid(rows = 16, cols = 16){

   container.style.setProperty("--grid-rows", rows);
   container.style.setProperty("--grid-cols", cols);

	for(var i = 0; i < rows * cols; i++){

	 const cell = document.createElement('div');
        

	   cell.addEventListener('mouseover', () => {
				cell.style.backgroundColor = 'black';

			});

	    container.appendChild(cell);

		}
	}


createGrid();