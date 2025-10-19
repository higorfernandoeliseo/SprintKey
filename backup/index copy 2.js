const inputText = document.querySelector('#textInsert');
const textoaSerExibido = document.querySelector('#text');
const errosDiv = document.querySelector('#errosDiv');
const textoDig = document.querySelector('#textodig');

const lista = ['O Rato roeu a roupa do rei de roma','O Papa e pop']

let textoAlvo = lista[0];
let indiceAtual = 0;
let acertos = 0;
let erros = 0;

let Tstatus = Array(textoAlvo.length).fill('pending');

textoaSerExibido.innerHTML = textoAlvo;

function textoAtualizado() {

    const html = textoAlvo.split('').map((letra, i) => {
        const status = Tstatus[i]; 
        if(status === 'certo') return `<span class="certo">${letra}</span>`;
        if(status === 'errado') return `<span class="errado">${letra}</span>`;
        return `<span>${letra}</span>`;
    }).join('');


    textoDig.innerHTML = html;

}

inputText.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace') {
        if(indiceAtual > 0) {
            indiceAtual--;
           if(Tstatus[indiceAtual] === 'errado') {
             Tstatus[indiceAtual] = 'pending';
             erros--;
           }
        }
        e.preventDefault();
    }
})

inputText.addEventListener('input', (e) => {

    const valorInput = inputText.value;
    const ultimoDigitado = valorInput[valorInput.length - 1];
    const charCorreto = textoAlvo[indiceAtual];

    if(!ultimoDigitado) return;

    if(ultimoDigitado ===  charCorreto) {
        if(Tstatus[indiceAtual] === 'pending') {
            Tstatus[indiceAtual] = 'certo';
            acertos++;
        }
        indiceAtual++;
    }else{

        if(Tstatus[indiceAtual] === 'pending') {
            Tstatus[indiceAtual] = 'errado';
            erros++;
        }

    }

    errosDiv.innerHTML = `${erros} Erros`;
    e.target.value = '';

    textoAtualizado();

})