const key = "4d40ce9966d225761c45c73876c85fb7";

// COLOCAR NA TELA
function colocarDadosNaTela(dados) {
    // CAPITURANDO NOME DA CIDADE
    document.querySelector('.titulo').innerHTML = `${dados.name}, ${dados.sys.country}`;

    // CAPITURANDO TEMPERATURA
    document.querySelector('.paragraphy-one').innerHTML = Math.floor(dados.main.temp) + "º";

    // CAPITURANDO DESCRIÇÃO
    document.querySelector('.paragraphy-two').innerHTML = dados.weather[0].description;

    // CAPITURANDO IMAGEM
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    // CAPITURANDO UMIDADE
    document.querySelector('.paragraphy-three').innerHTML = dados.main.humidity + "%";
    
    // CAPITURANDO TEMP. MAX
    document.querySelector('#temp-max').innerHTML = Math.floor(dados.main.temp_max) + "ºC"
    
    // CAPITURANDO TEMP. MIN
    document.querySelector('#temp-min').innerHTML = Math.floor(dados.main.temp_min) + "ºC"
    
    // CAPITURANDO VENTOS
    document.querySelector('#wind').innerHTML = Math.floor(dados.wind.speed) + "km/h"
}

// BUSCAR A CIDADE NO SERVIDOR
async function buscarCidade(nomeCidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

// O USUARIO CLICA PARA BUSCAR
function clickBuscar() {
    const nomeCidade = document.querySelector('.input-buscar').value;

    buscarCidade(nomeCidade);
}
