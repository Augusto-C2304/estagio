function fibonacciSenquencia(n) {
    let fibSequencia = [0, 1];
    let proximoFib = fibSequencia[1];

    while (proximoFib < n) {
        proximoFib = fibSequencia[fibSequencia.length - 1] + fibSequencia[fibSequencia.length - 2];
        fibSequencia.push(proximoFib);
    }

    return fibSequencia;
}

function isInFibonacci(n) {
    const fibSequencia = fibonacciSenquencia(n);
    if (fibSequencia.includes(n)) {
        return `O numero ${n} pertence a sequencia de Fibonacci.`;
    } else {
        return `O numero ${n} nao pertence a sequencia de Fibonacci.`;
    }
}

const numero = parseInt(prompt('Informe um numero para verificar:'));

if (!isNaN(numero)) {
    alert(isInFibonacci(numero));
} else {
    alert('por favor, insira um numero inteiro valido.');
}