function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todos os conteúdos de abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões de abas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra o conteúdo da aba atual e adiciona uma classe "active" ao botão da aba que abriu a aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Mostra a primeira aba por padrão
document.getElementsByClassName("tablink")[0].click();
