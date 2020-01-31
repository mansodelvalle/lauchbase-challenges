/* =============================================
    DESAFIO 1 - PROGRAMA PARA CALCULAR O IMC E NÍVEL DE OBESIDADE DE UMA PESSOA 
   ============================================= */

const name = 'Marcos'
const weight = 58
const height = 1.75
const imc = weight / ( height * height )
console.log(imc)

if(imc >= 30 || imc === 30)
{
    console.log(`${name} você está acima do peso`)
}else{
    console.log(`${name} você não está acima do peso`)
}