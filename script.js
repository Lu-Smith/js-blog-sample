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

/* image animation */

const bannerBox = document.getElementById(`banner`);

function imageAnimation () {
    for ( let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
        const block = document.createElement(`div`);
        block.classList.add(`blocks`);
        block.style.backgroundPosition = `${-j * 50}px ${-i * 40}px`;
        bannerBox.appendChild(block);

        
        }
    }    
}

imageAnimation ();


