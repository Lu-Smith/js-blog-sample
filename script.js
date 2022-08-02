const open = document.getElementById(`open`);
const close = document.getElementById(`close`);
const container = document.querySelector(`.container`);

open.addEventListener(`click`, () => container.classList.add(`show-nav`));

close.addEventListener(`click`, () => container.classList.remove(`show-nav`));

const links = document.querySelectorAll(`.content .portfolio`) 

links.forEach(link => {
    link.innerHTML = link.innerText
       .split(``)
       .map((letter, idx) => `<span style="transition-delay:${idx * 70}ms">${letter}</span>`)
       .join(``)
})

const footerLinks = document.querySelectorAll(`footer .portfolio`) 

footerLinks.forEach(link => {
    link.innerHTML = link.innerText
       .split(``)
       .map((letter, idx) => `<span style="transition-delay:${idx * 70}ms">${letter}</span>`)
       .join(``)
})

/* contact page */

const labels = document.querySelectorAll(`.form-control label`) 

labels.forEach(label => {
    label.innerHTML = label.innerText
       .split(``)
       .map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`)
       .join(``)
})

/* about page */

const boxesContainer = document.getElementById(`boxes`);
const btnChange = document.getElementById(`btn-change`);

btnChange.addEventListener(`click`, () => boxesContainer.classList.toggle(`big`));

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const box = document.createElement(`div`);
            box.classList.add(`box`);
            box.style.backgroundPosition = `${-j * 85}px ${-i * 85}px`;
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();

const boxesContainerSecond = document.getElementById(`boxes-second`);
const btnChangeSecond = document.getElementById(`btn-change-second`);

btnChangeSecond.addEventListener(`click`, () => boxesContainerSecond.classList.toggle(`big-second`));

function createBoxesSecond() {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            const boxSecond = document.createElement(`div`);
            boxSecond.classList.add(`box-second`);
            boxSecond.style.backgroundPosition = `${-j * 42.5}px ${-i * 42.5}px`;
            boxesContainerSecond.appendChild(boxSecond);
        }
    }
}

createBoxesSecond();

const containerThird = document.getElementById(`container-third`);
const btnChangeThird = document.getElementById(`btn-change-third`)
const colors = [`#ff5d9e`, `#8f71ff`, `#82acff`, `#8bffff`, `#fdfdcb`];
const colorsChange = [`#ff5200`, `#0c9cee`, `#a1f480`, `#851de0`, `#f1fa3c`, `#eda045`];
const SQUARES = 500;
let click = false;



function drawSquares() {

    for(let i = 0; i < SQUARES; i++) {
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener(`mouseover`, () => setColor(square));
        square.addEventListener(`mouseout`, () => removeColor(square));
        containerThird.appendChild(square);
    };
 

    
};

btnChangeThird.addEventListener(`click`, changeOnClickDrawSquares);

drawSquares();

function changeOnClickDrawSquares() {
    click ? returnDrawSquares() : changeDrawSquares();
}

function changeDrawSquares() {
    getRandomColor = getRandomColorChange;
    removeColor = removeColorChange;   
    click = true;
}

function returnDrawSquares() {
    getRandomColor = getRandomColorReturn;
    removeColor = removeColorReturn;
    click = false;
}




function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0, 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0, 0, 2px, #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColorChange() {
    return colorsChange[Math.floor(Math.random() * colors.length)];
}

function removeColorChange(element) {
    element.style.background = `#ff5200`;
    element.style.boxShadow = `0, 0, 2px, #fff`;
    
}

function removeColorReturn(element) {
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0, 0, 2px, #000`;
}

function getRandomColorReturn() {
    return colors[Math.floor(Math.random() * colors.length)];
}
