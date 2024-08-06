const modeDark = document.querySelector('#dark');
const moonIcon = document.querySelector('#moon');
const sunIcon = document.querySelector('#sun');

function modoDark(){
    const conteudoDark = document.querySelector('#main_conteiner');
    conteudoDark.classList.toggle("dark-mode");

    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
}

modeDark.addEventListener('click', modoDark);