let container = document.getElementById("container");
let gridSize = 500; 
let cellsPerSide = 16; 

function createGrid(size) {
    container.innerHTML = '';

    gridSize = size;
    let cellSize = gridSize / cellsPerSide;

    for (let i = 0; i < cellsPerSide * cellsPerSide; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gb");
        newDiv.style.width = cellSize + "px";
        newDiv.style.height = cellSize + "px";

        newDiv.addEventListener('mouseover', function(event) {
            newDiv.style.backgroundColor = 'black';
        });

        container.appendChild(newDiv);
    }
}

function changeGridSize() {
    let newSize = prompt("Enter number of squares per side (max 100):", cellsPerSide);
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    cellsPerSide = newSize;
    createGrid(gridSize);
}

function resetGrid() {
    createGrid(gridSize);
}

createGrid(gridSize);
