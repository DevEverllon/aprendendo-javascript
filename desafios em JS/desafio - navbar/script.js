const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('#nav-links');

function openNav(){
    navLinks.classList.toggle('open');
}
menuIcon.addEventListener('click', openNav);


function closeNav(event){
    if(!navLinks.contains(event.target) && !menuIcon.contains(event.target)){
        navLinks.classList.remove('open');
    }
}
document.addEventListener('click', closeNav)