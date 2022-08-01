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