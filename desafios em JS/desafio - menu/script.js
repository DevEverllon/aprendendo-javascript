document.addEventListener('DOMContentLoaded', function(){
    const menuBotao = document.querySelector('#menu-button')
    const menuCont = document.querySelector('#menu-conteudo')

    menuBotao.addEventListener('click', () => {
        menuCont.classList.toggle("menu-responsivo");
    })
})