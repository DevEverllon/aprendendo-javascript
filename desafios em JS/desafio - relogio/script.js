const horas = document.querySelector('#hours');
const minutos = document.querySelector('#minutes');
const secundos = document.querySelector('#seconds');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    horas.textContent = hours;
    minutos.textContent = minutes;
    secundos.textContent = seconds;

    if (hours < 6) {
        document.body.style.background = '#1e3454';
    }
    else if (hours < 12) {
        document.body.style.background = '#ffd900'
    }
    else if (hours < 18) {
        document.body.style.background = '#ffa500'
    }
    else {
        document.body.style.background = '#0066ff'
    }

})