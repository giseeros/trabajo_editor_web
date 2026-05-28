
// ===== REVEAL ANIMATION =====

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', revealElements);

function revealElements(){

reveals.forEach(element => {

const windowHeight = window.innerHeight;

const revealTop = element.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.classList.add('active');

}

});

}

// ===== HERO EFFECT =====

const heroTitle = document.querySelector('.hero h2');

window.addEventListener('mousemove',(e)=>{

const x = (window.innerWidth / 2 - e.pageX) / 40;
const y = (window.innerHeight / 2 - e.pageY) / 40;

heroTitle.style.transform =
`translate(${x}px, ${y}px)`;

});