const botao = document.querySelector('#button');

function mudarClasse(){
    const elemento = document.querySelector('#conteudo');

    // REMOVER A CLASSE 'classeOne'
    elemento.classList.toggle('classeOne');

    // ADICIONAR A CLASSE 'classeTwo
    elemento.classList.toggle('classeTwo');

    // COM O 'ADD' E 'REMOVE' SÓ É FEITO UMA VEZ, COM O 'TOGGLE' PODE FICAR ALTERNANDO:
    // elemento.classList.remove('classeOne');
    // elemento.classList.add('classeTwo');
}

botao.addEventListener('click', mudarClasse);

