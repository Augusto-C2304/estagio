const inputString = prompt("Digite uma string para verificar a letra 'a':") || "Exemplo de string padrão com a letra A.";

function contarA(string) {
    const regular = /a/gi;
    const ocorrencia = string.match(regular);

    const quantidade = ocorrencia ? ocorrencia.length: 0;
    return quantidade;
}

const quantidadeDeA = contarA(inputString);
if (quantidadeDeA > 0) {
    alert(`A letra 'a' aparece ${quantidadeDeA} vez(es) na string.`);
} else {
    alert("A letra 'a' não está presente na string.");
}