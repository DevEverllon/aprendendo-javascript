function carregar(){
    let horario = window.document.querySelector('#hora');
    let saudacao = window.document.querySelector('#saudacao')
    let img = window.document.querySelector('#img')
    let horaAtual = new Date()
    let horaAtualizada = horaAtual.getHours()

    horario.innerHTML = `Agora são ${horaAtualizada} horas`

    if(horaAtualizada < 6){
        document.body.style.background = '#1e3454'
        saudacao.innerHTML = 'Boa Madrugada!'
        img.src = 'img/madrugada.png'
    }
    else if(horaAtualizada < 12){
        document.body.style.background = '#ffd900'
        saudacao.innerHTML = 'Bom dia!'
        img.src = 'img/manha.png' 
    }
    else if(horaAtualizada < 18){
        document.body.style.background = '#ffa500'
        saudacao.innerHTML = 'Boa tarde!'
        img.src = 'img/tarde.png' 
    }
    else{
        document.body.style.background = '#0066ff'
        saudacao.innerHTML = 'Boa noite!'
        img.src = 'img/noite.png'
    }
}



/* 
    #1e3454 - blue dark
    #0066ff - blue
    #ffa500 - orange
    #ffd900 - yellow
*/


/* 
    0
    1
    2
    3
    4
    5 --
    6 TUDO QUE FOR MENOR QUE 6 É VERMELHO
    7
    8
    9
    10
    11
    12 TUDO QUE FOR MENOR QUE 12 É AMARELO
    13
    14
    15
    16
    17
    18 TUDO QUE É MENOR QUE 18 É LARANJA
    19
    20
    21
    22
    23 TUDO QUE É MENOR QUE 24 É AZUL
*/