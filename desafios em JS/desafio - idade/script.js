function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = document.querySelector('#txtano').value
    let res = document.querySelector('#res')
    

    // O if pode ser feido tbm da seguinte maneira: if(anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual){...}
    // FAZENDO UMA VALIDAÇÃO PARA A CAIXA DE TEXTO NÃO ESTIVER VAZIA OU SEJA MAIOR QUE O ANO ATUAL
    if(anoNasc == '' || anoNasc >= anoAtual){
        // window.alert('Verifique os dados')
        res.innerHTML = `<p style="color: red;">Verifique as informações e preencha novamente</p>`
    }
    else{
        let sexo = document.getElementsByName('radsex') //TEM QUE USAR ESSA FUNÇÃO PARA PEGAR O VALOR DO INPUT:RADIO
        let idade = anoAtual - anoNasc
        let genero = 0
        let img = document.querySelector('#foto')
        // img.setAttribute('id', 'foto') //mesma coisa que <img id='foto> no HTML

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                // img.setAttribute('src', 'bebe-m.jpg')
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'bebe-m.jpg'
            }
            else if(idade >= 10 && idade < 21){
                // jovem
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'adolescente-m.jpg'
            }
            else if(idade >= 21 && idade < 60){
                // adulto
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'adulto-m.jpg'
            }
            else{
                // idoso
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'idoso-m.jpg'
            }
        }
        else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // criança
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'bebe-f.jpg'
            }
            else if(idade >= 10 && idade < 21){
                // jovem
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'adolescente-f.jpg'
            }
            else if(idade >= 21 && idade < 60){
                // adulto
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'adulto-f.jpg'
            }
            else{
                // idoso
                res.innerHTML = `Você é um ${genero} com ${idade} anos`
                img.src = 'idoso-f.jpg'
            }
        }
    }
}
