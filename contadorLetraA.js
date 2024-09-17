const readline = require('readline');

const contarLetraA = (texto) => {
    if (typeof texto !== 'string') {
        throw new Error('O input deve ser uma string');
    }

    const regex = /a/gi;
    const ocorrencias = (texto.match(regex) || []).length;

    if (ocorrencias === 0) {
        return "A letra 'a' não foi encontrada na string.";
    } else if (ocorrencias === 1) {
        return "A letra 'a' foi encontrada 1 vez na string.";
    } else {
        return `A letra 'a' foi encontrada ${ocorrencias} vezes na string.`;
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const obterEntradaUsuario = () => {
    return new Promise((resolve) => {
        rl.question("Por favor, insira uma string (ou pressione Enter para usar uma string predefinida): ", (entrada) => {
            resolve(entrada);
        });
    });
};

const processarEntradaUsuario = async () => {
    let entrada = await obterEntradaUsuario();

    if (entrada.trim() === '') {
        entrada = "Esta é uma string predefinida com algumas letras a.";
        console.log("Usando string predefinida:", entrada);
    }

    const resultado = contarLetraA(entrada);
    console.log(resultado);

    rl.close();
};

// Executar o programa
processarEntradaUsuario().then(() => {
    console.log("\nExemplos adicionais:");
    console.log(contarLetraA("Abracadabra"));
    console.log(contarLetraA("MAIÚSCULAS E minúsculas"));
    console.log(contarLetraA("Não há nenhuma aqui"));
    console.log(contarLetraA("aAaAaA"));
    console.log(contarLetraA(""));
});