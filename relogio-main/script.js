function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    let grausSegundos = (segundos * 6)-90;
    let grausMinutos = (minutos * 6 + segundos * 0.1)-90;
    let grausHoras = (horas * 30 + minutos * 0.5)-90;

    document.querySelector('.p_s').style.transform = `rotate(${grausSegundos}deg)`;
    document.querySelector('.p_m').style.transform = `rotate(${grausMinutos}deg)`;
    document.querySelector('.p_h').style.transform = `rotate(${grausHoras}deg)`;

    document.querySelector('.digital').textContent = 
        `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}



setInterval(atualizarRelogio, 1000);   
atualizarRelogio();
