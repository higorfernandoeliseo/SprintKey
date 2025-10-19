const inputText = document.querySelector('#textInsert');
const textoaSerExibido = document.querySelector('#text');
const listText = ['O Mapa da Mina','O Rato roeu a roupa do rei de roma']

let textoAlvo = listText[1];

textoaSerExibido.innerHTML = textoAlvo;

let ErrosPermanentes = []
let errosTotal = 0;

inputText.addEventListener('keydown', (e) => {

    const valorInput = inputText.value;

    if(e.key === 'Backspace') {
        e.preventDefault();
    }

    if(valorInput.length >= textoAlvo.length && e.key.length === 1) {
        e.preventDefault();
    }

})


function inputs() {

    const valorInput = inputText.value;
    const indAtual = valorInput.length - 1;

    if(indAtual < textoAlvo.length) {

        const ultimoCharDig = valorInput[indAtual];
        const textoDig =  textoAlvo[indAtual];

        if(ultimoCharDig !== textoDig && !ErrosPermanentes.includes(indAtual)) {
            errosTotal++;
            ErrosPermanentes.push(indAtual)
        }
    }

}

inputText.removeEventListener('input', inputs);
inputText.addEventListener('input', inputs);