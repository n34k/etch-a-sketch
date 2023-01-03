//Node declaration

const container = document.getElementById("container");
const eraseButton = document.getElementById("left-button");
const colorButton = document.getElementById("right-button");
const sizeSlider = document.getElementById("slider");
const sizeOutput = document.getElementById("size-output");
const gridItems = container.childNodes;

const DEFAULT_SIZE = 16;

//Function to create different grid sizes

function createGrid(size) {
    container.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr)`);
    for(let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = ".";
        container.appendChild(gridItem);
    }
}


function sliderInput() {
    sizeSlider.oninput = function() {
        let size = this.value;
        container.replaceChildren();
        createGrid(size);
        sizeOutput.textContent = `${size} x ${size}`;
        console.log(gridItems);
        gridInput();
    }
}

function gridInput() {
    gridItems.forEach((div) => {
        div.addEventListener("click", () => {
            div.setAttribute("style", "background-color: black");
        });
    });
}

function inputs() {
    gridInput();
    sliderInput();
}

function play () {
    createGrid(DEFAULT_SIZE);
    inputs();
}

play();
