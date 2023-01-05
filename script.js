//Node declaration

const container = document.getElementById("container");
const eraseButton = document.getElementById("left-button");
const colorButton = document.getElementById("color-button");
const sizeSlider = document.getElementById("slider");
const sizeOutput = document.getElementById("size-output");
const gridItems = container.childNodes;

const DEFAULT_SIZE = 50;

//Function to create different grid sizes

function createGrid(size) {
    container.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr)`);
    for(let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
}

//Function that changes grid size based on slider value

function sliderInput() {
    sizeSlider.oninput = function() {
        let size = this.value;
        container.replaceChildren();
        createGrid(size);
        sizeOutput.textContent = `${size} x ${size}`;
        gridInput();
    }
}

//Function for drawing

function gridInput() {
    gridItems.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.setAttribute("style", `background-color: ${getColor()}`);
        });
    });
}

//Funtion that changes color of grids

function getColor() {
    return colorButton.value;
}

//Function that erases board on left button click

function erase() {
    eraseButton.addEventListener("click", () =>  {
        let size = sizeSlider.value;
        container.replaceChildren();
        createGrid(size);
        gridInput();
    });
}

//Needed 2 functions here to create default grid size on load

function inputs() {
    sliderInput();
    erase();
    gridInput();
}

function play () {
    createGrid(DEFAULT_SIZE);
    inputs();
}

play();
