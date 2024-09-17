const isFibonacci = (num) => {
    let [a, b] = [0, 1] // inicializando os dois primeiros numeros da sequencia
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequencia de Fibonacci`;

    }
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num
        ? `O número ${num} pertence à sequencia de Fibonacci.` : `O número ${num} NÃO pertence à sequencia de Fibonacci`
}
//Exemplo
const number = 232;
console.log(isFibonacci(number)); // O número 232 NÃO pertence à sequencia