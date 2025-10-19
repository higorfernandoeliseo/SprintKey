const inputText = document.querySelector('#textInsert');
const errosDiv = document.querySelector('#erros');
const wpmTotal = document.querySelector('#wpm');

const text = 'O Rato roeu a roupa do rei de roma.';

const listText = ['O Mapa da Mina','O Rato roeu a roupa do rei de roma.']

let startTime;
let endTime;
let wpm = 0;
let erros = 0;
let acertos = 0;

let backspaceBloqueado = false;

//  para calcular o wpm usamos a seguinte formula:

//  wpm = (totaldigitado / 5) / (60 / tempoemsegundos)

//  5 significa 1 palavra = 5 caracteres é um valor padrão para representa o tamanho médio de uma palavra 

//  60 / tempoemsegundos significa que precisa converter o tempo que levou para digitar o texto em seguindos.


// Para calcular com precisão usamos somente as palavras corretas:
// precisao = (palavrascorretas / totalde palavras digitadas) * 100;


inputText.addEventListener('keydown', (e) => {
    const valorDigitado = inputText.value;

    const textoAlvo = listText[1];

    if(e.repeat) {
        return;
    }

    if(e.key === "Backspace"){

        if(valorDigitado.length === 0) {
            e.preventDefault();
            return;
        }

        if(valorDigitado[valorDigitado.length - 1] !== textoAlvo[valorDigitado.length - 1] && textoAlvo[valorDigitado.length - 1] !== ' '){
            e.preventDefault();

            if(!backspaceBloqueado) {
                erros++;
                backspaceBloqueado = true;
            }

        }

        backspaceBloqueado = false;
    }
})

inputText.addEventListener('input', () => {

    const valorInput = inputText.value;

    if(valorInput.length === 1) {
        startTime = new Date();
        //console.log(`Inicio da digitação: ${startTime}`);
    }

    for (let i = 0; i < valorInput.length; i++) {

        if (valorInput[i] === listText[1][i]) {
            // console.log('Correto!');
            acertos++;
        } 

    }



    errosDiv.innerHTML = `Erros: <strong>${erros}</strong>`;

    if(valorInput.length === listText[1].length) {

        endTime = new Date();

        const tempoSegundo = (endTime - startTime) / 1000;

        //console.log(`Fim da digitação: ${endTime}`);

        wpm = Math.round((valorInput.length / 5) * (60 / tempoSegundo));

        if(wpm > 0) {
            wpmTotal.innerHTML = `Total score: ${tempoSegundo}s WPM: ${wpm}`;
        }

    }


})
