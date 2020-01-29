
/* ============================================
        DESAFIO 3 - CRIAR UM PROGRAMA QUE RETORNA A LISTA DE USUÁRIOS DE UM ARRAY E AS TECNOLOGIAS ESPECIALIZADAS DE CADA USUÁRIO
   ============================================ */

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['Javascript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
]


for( let usuario of usuarios)
{
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}
