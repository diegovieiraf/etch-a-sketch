const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-square");
            div.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = "black";
            })
            container.appendChild(div);
        }
    }
}

createGrid();

function gridSize() {
    button.addEventListener("click", () => {
        let squareNum = prompt("Enter the number of the squares on the grid (max: 100):");
        if (squareNum > 100 || squareNum < 1) {
            squareNum = prompt("Enter the number of the squares on the grid (max: 100):");
        }
        console.log(squareNum);
    })
}

gridSize();