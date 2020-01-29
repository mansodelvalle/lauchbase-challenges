/* ============================================
     DESAFIO 5 - BUSCA POR TECNOLOGIA
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


for(let usuario of usuarios)
{
   for(let tecnologia of usuario.tecnologias)
   {
       if(tecnologia == 'CSS')
       {
           console.log(`O usuário ${usuario.nome} trabalha com ${tecnologia}`)
       }
   }
}
