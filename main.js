let arr = [0, 0, 0];
let percorre = 0;
let valor = false;

function sorteioArrays() {
    
    for (let i = 0; i < arr.length; i++) {
      let num = parseInt(Math.random() * 3) + 1;
        arr[i] = num;
    }
    return arr;
}

function verificar() {
    let verifica = [...arr];
    arr = [...sorteioArrays()];

    if (arr.every((v, i) => v === verifica[i]) && percorre < 3){
        percorre++;
        if (percorre === 3) {
            valor = true;
        }
        return console.log(`Porta ${percorre} aberta`);
    }

    if (!valor) {
        return console.log('Tente novamente');
    }
}

for (let i = 0; i < 40; i++) {
    verificar()
}
