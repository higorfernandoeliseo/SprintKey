
// Direitos Autorais 2025 Igor F. Eliseo.

//Lista de frases prontas para usar Offline
const listaTextos = [
    'A rápida raposa marrom salta sobre o cão preguiçoso',
    'O dia está ensolarado',
    'A internet está offline',
    'Era um dia um velho chamado Zusa, que trabalhava pelo ofício de carapina',
    'A primeira programadora mulher do mundo foi Ada Lovelace em 1833',
    'Enquanto o sol se punha sobre as montanhas distantes, uma brisa fresca soprava pelas janelas abertas da aconchegante cabana.',
    'Compre 4 caixas e 5 cestas de frutas exóticas: kiwi, abacaxi e jaca.'
];

//Lista com bloco de números prontos para usar Sem necessidade de API Externa
const listNumbers = [
    '9218 5537 19 44 8826',
    '1 6230 9714 50 786 33',
    '9921 1083 4911 6739 94',
    '2 7552 2981 15 604 73',
    '46 95 23 58 37 86 1770 41',
    '85 14 61 733 98 22 47 59',
    '10 74 36 91 5 53 88 19 66',
    '99 240 7816 82 3157 9377 24 51 945 68 3 80 12',
    '96 28 64 351 72 48 20 89'
];

//Lista de simbolos prontos
const ListSimbolos = [
    '# @ % & ( )',
    '[ ] { } *',
    '+ - / <> ? ^ ~ !',
    '- . : ; ,'
];

//Lista de dados como endereços ficticios para praticar
const ListaDados = [
    'Rua das Amoreiras 45 C Jardim da Paz São Paulo / SP 01310-000',
    'Avenida Sol Nascente 1209 Barra Sul Rio de Janeiro / RJ 22775-001',
    'Travessa dos Hibiscos 23 Centro Histórico Salvador / BA 40020-050',
    'Estrada do Sertão 5877	Zona Rural Patos / PB 58700-000',
    'Alameda dos Pinhais 1500 Ap. 31Vila NovaCuritiba / PR 80060-002',
    'Rua Flores Raras 345 Jardim Oeste Belo Horizonte MG 30310-400',
    'Av Principal Leste 101 Bloco A Apto 101 Centro Urbano Manaus AM 69055-010',
    'Travessa do Rio Seco 8 Bairro Novo Recife PE 50030-220',
    'Alameda dos Cientistas 250 Sala 3 Setor Sul Brasília DF 70040-900',
    'Praça da Liberdade 12 Loja 5 Vila Central Porto Alegre RS 90040-050',
    'Viela Estrela Guia 60 Apartamento 402 Cidade Alta Natal RN 59010-330',
    'Rua Sete de Setembro 1930 Casa 2 Bairro Industrial Curitiba PR 80030-010',
    'Avenida 23 de Maio 5000 Pavilhão D Várzea Paulista Jundiaí SP 13200-000'
];

// Pega o body 
const currentTheme = document.documentElement.getAttribute('data-theme');

//Pega o tipo de desafio
const typeChallenge = document.querySelector('#typeChallenge');

//Pega o elemento SPAN que vai exibir a frase no HTML.
const spantextoExibido = document.querySelector('#quote');

// Pegar o input que vai diigtar o texto.
const inputDigitado = document.querySelector('#text-input');

// Pega o botão de modo claro/escuro
const mode = document.querySelector('#mode_icon');


//Variavel que vai armazenar a array dos caracteres.
let quote = "";

// Tempo inicial
let time = 60;

// Variavel que vai armazenar o tempo deccorrido
let timer = "";

// Variavel que vai armazenar a contagem de caracteres errados digitados.
let erros = 0;

// Armazena uma frase da lista.
let textoAlvo = '';

// Função que gera a frase ja separada por caracteres
const gerarNovaFrase = () => {

    let rndIndice = 0;

    if (typeChallenge.value === 'Ttext') {
        rndIndice = Math.floor(Math.random() * listaTextos.length); 
        textoAlvo = listaTextos[rndIndice];
    } else if (typeChallenge.value === 'Tnumbers') {
        rndIndice = Math.floor(Math.random() * listNumbers.length); 
        textoAlvo = listNumbers[rndIndice];
    } else if (typeChallenge.value === 'Tdados') {
        rndIndice = Math.floor(Math.random() * ListaDados.length); 
        textoAlvo = ListaDados[rndIndice];
    } else {
        rndIndice = Math.floor(Math.random() * ListSimbolos.length); 
        textoAlvo = ListSimbolos[rndIndice];
    }

    // if (typeChallenge.value === "Texto") {
    //     rndIndice = Math.floor(Math.random() * listaTextos.length); 
    //     textoAlvo = listaTextos[rndIndice];
    // }else if (typeChallenge.value === "Números") {
    //     rndIndice = Math.floor(Math.random() * listNumbers.length); 
    //     textoAlvo = listNumbers[rndIndice];
    // } else if (typeChallenge.value === "Dados") {
    //     rndIndice = Math.floor(Math.random() * ListaDados.length); 
    //     textoAlvo = ListaDados[rndIndice];
    // } else {
    //     rndIndice = Math.floor(Math.random() * ListSimbolos.length); 
    //     textoAlvo = ListSimbolos[rndIndice];
    // }

    //gera um numero aleatório para selecionar uma frase.
    //let randomIndice = Math.floor(Math.random() * listaTextos.length); 


    spantextoExibido.innerHTML = "";

    quote = textoAlvo;

    // Quebra o texto em caracteres e percorre cada um adicionando dentro de uma span.
    let arr = quote.split("").map(valor => {
        return `<span class="quote-chars">${valor}</span>`;
    });
    
    //junta novamente e exibe no HTML.
    spantextoExibido.innerHTML += arr.join('');

}

//Logica que impede ao pressionar o Backspace ele altere o indice de comparação dos caracteres digitados

inputDigitado.addEventListener('keydown', (evento) => {

    let indiceAtual = 0;

    // Verifica se pressionado a tecla Backspace ou a tecla Tab e não permite que apague o ultimo caractere digitado.
    if (evento.key === 'Backspace' || evento.keyCode === 8 || evento.key === 'Tab') {
        evento.preventDefault();

        if (indiceAtual > 0) {
            //decrementa o indice ao caractere anterior sem mexer no indice de comparação.
            indiceAtual--;
        }
    }

});

// Logica que compara o caractere digitado com caracteres da frase
inputDigitado.addEventListener('input',  () => {
    let charTexto = document.querySelectorAll('.quote-chars');
    
    charTexto = Array.from(charTexto);

    // Quebra o texto no input em caracteres separados
    let inputDigitadoChar = inputDigitado.value.split("");

    charTexto.forEach((caracter, indice) => {

        //verifica se o caractere(texto) = inputDigitado[indice]

        if (caracter.innerText == inputDigitadoChar[indice]) {
            caracter.classList.add('correto');
        } else if (inputDigitadoChar[indice] == null) {

            if (caracter.classList.contains('correto')){
                caracter.classList.remove('correto');
            } else {
                caracter.classList.remove('incorreto');
            }
            caracter.classList.remove('correto');
        
        } else {

            if (!caracter.classList.contains('incorreto')) {
                erros += 1;
                caracter.classList.add('incorreto');
            }

            // Exibe o total de erros digitados
            document.querySelector('.mistakes').innerHTML = erros;
            

        }

        // verifica se todos os caracteres corretos foram digitados.
        let check = charTexto.every(elemento => {
            return elemento.classList.contains("correto");
        });

        if (check) {
            displayResult();
        }

    })

});

// Atualizando o timer na tela
function updateTimer() {
    if (time == 0) {
        // Fim do test se o timer chegar no 0.
        displayResult();
    } else {
        // decrementa de tempo em tempo em segundos.
        document.querySelector("#timer").innerText = --time + "s";
    }
}


//Setando o timer
const timeReduce = () => {
    time = 60;
    //Atualiza o time a cada segundo.
    timer = setInterval(updateTimer, 1000);
}

// Fim do test
const displayResult = () => {
    document.querySelector('.resultado').style.display = "block";
    clearInterval(timer);
    document.querySelector("#stop-test").style.display = "none";
    inputDigitado.disabled = true;
    inputDigitado.style.display = 'none';

    document.querySelector('#gen_new_quote').style.display = "none";

    let timeTaken = 1;
    if(time != 0) {
        timeTaken = (60 - time) / 100;
    }

    let wpm_score = (inputDigitado.value.length / 5 / timeTaken).toFixed(2);

    document.querySelector("#wpm").innerText = (isNaN(wpm_score)) ? "0.00 wpm" : wpm_score + " wpm";

    let precisao = Math.round(((inputDigitado.value.length - erros) / inputDigitado.value.length) * 100);

    document.querySelector("#precisao").innerText = (isNaN(precisao) || precisao < 0) ? '0 %' : precisao + "%";
}

// Iniciar o teste
const startTime = () => {
    gerarNovaFrase();
    erros = 0;
    timer = "";
    inputDigitado.disabled = false;
    inputDigitado.style.display = 'block';
    inputDigitado.focus();
    timeReduce();
    document.querySelector('#start-test').style.display = "none";
    document.querySelector('#stop-test').style.display = "block";
    document.querySelector('#descricao').style.display = "none";
    document.querySelector('#typeChallenge').style.display = "none";
}

// Eventos dos botoes de Iniciar ou Parar o test.
const botoesEventos = () => {

    document.querySelector('#start-test').onclick = () => { startTime(); };
    document.querySelector('#stop-test').onclick = () => { displayResult(); };
    document.querySelector('#new_game').onclick = () => { new_game(); };

    document.querySelector('#gen_new_quote').onclick = () => { 
        gerarNovaFrase(); 
        erros = 0; 
        document.querySelector(".mistakes").innerText = '0';
        inputDigitado.value = "";
    }

    mode.onclick = () => { 

        const body = document.body;

        if (mode.classList.contains('la-moon')) {
            mode.classList.remove('la-moon');
            mode.classList.add('la-sun');

            body.setAttribute('data-theme','dark');
            return;
        }

        body.setAttribute('data-theme','light');
        mode.classList.add('la-moon');
        mode.classList.remove('la-sun');
    };

}

const new_game = () => {
    document.querySelector("#timer").innerText = '0s';
    timer = "";
    time = 0;
    erros = 0;
    document.querySelector(".mistakes").innerText = '0';
    spantextoExibido.innerHTML = "";
    inputDigitado.value = "";
    inputDigitado.disabled = true;
    botoesEventos();
    document.querySelector('#start-test').style.display = "block";
    document.querySelector('#stop-test').style.display = "none";
    document.querySelector('.resultado').style.display = "none";
    document.querySelector('#gen_new_quote').style.display = "block";
    document.querySelector('#descricao').style.display = "block";
    document.querySelector('#typeChallenge').style.display = "block";

}

window.onload = () => {
    inputDigitado.value = "";
    document.querySelector('#start-test').style.display = "block";
    document.querySelector('#stop-test').style.display = "none";
    inputDigitado.style.display = 'none';
    inputDigitado.disabled = true;
    //gerarNovaFrase();
    botoesEventos();
}

