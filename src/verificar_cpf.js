export default function validarCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (verificarNumeros(cpf) || validarPrimeiroDigitoCpf(cpf) || validarSegundoDigitoCpf(cpf)) {
        console.log('Esse Cpf não passou nos críterios de avaliação')
    }
    else {
        console.log('Tudo certo')
    }
}
function verificarNumeros(cpf) {
    const numerosRepetidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ];
    return numerosRepetidos.includes(cpf)
}
function validarPrimeiroDigitoCpf(cpf) {
    let soma = 0;
    let multiplicando = 10;
    for (let posicao = 0; posicao < 9; posicao++) {
        soma += cpf[posicao] * multiplicando;
        multiplicando--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[9];
}
function validarSegundoDigitoCpf(cpf) {
    let soma = 0;
    let multiplicando = 11;
    for (let posicao = 0; posicao < 10; posicao++) {
        soma += cpf[posicao] * multiplicando;
        multiplicando--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[10];
}