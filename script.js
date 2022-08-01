const open = document.getElementById(`open`);
const close = document.getElementById(`close`);
const container = document.querySelector(`.container`);

open.addEventListener(`click`, () => container.classList.add(`show-nav`));

close.addEventListener(`click`, () => container.classList.remove(`show-nav`));

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
