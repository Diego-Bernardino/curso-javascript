function carregar() {
var msg = window.document.querySelector('div#msg');
var img = window.document.querySelector('img#imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'imagens/foto-manha.png';
    document.body.style.background = '#e2cd9f';
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'imagens/foto-tarde.png';
    document.body.style.background = '#b9846f';
} else {
    // boa noite
    img.src = 'imagens/foto-noite.png';
    document.body.style.background = '#515154';
}
}