function contador() {
    let ini = document.querySelector('input#contTxt');
    let fim = document.querySelector('input#fimTxt');
    let passo = document.querySelector('input#stepTxt');
    let res = document.querySelector('div#res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}

/*function contador() {
    let conTxt = window.document.querySelector('input#contTxt');
    let fim_txt = window.document.querySelector('input#fimTxt');
    let step_txt = window.document.querySelector('input#stepTxt');
    let res = window.document.querySelector('div#res');
    let con = Number(conTxt.value);
    let fim = Number(fim_txt.value);
    let step = Number(step_txt.value);
    for (let cont = con; cont < fim; cont += step) {
        res.innerHTML += `${cont}, `;
    }
    res.innerHTML += `${cont}!`;
}
*/