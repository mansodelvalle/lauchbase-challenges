/* ============================================
    DESAFIO 1 - PROGRAMA PARA CALCULAR O IMC E NÍVEL DE OBESIDADE DE UMA PESSOA
   ============================================ */

const nome = 'Marcos'
const peso = 58
const altura = 1.75
const imc = peso / ( altura * altura )
console.log(imc)

if(imc >= 30 || imc === 30)
{
    console.log(`${nome} você está acima do peso`)
}else{
    console.log(`${nome} você não está acima do peso`)
}