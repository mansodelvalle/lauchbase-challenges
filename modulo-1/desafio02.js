/* ============================================
        DESAFIO 2 - Cálculo de aposentadoria
   ============================================ */

   const nome = 'Silvana'
   const sexo = 'M'
   const idade = 48
   const contribuicao = 23
   const calc = (idade + contribuicao) 

   if(contribuicao >= 30 && sexo === 'F' || contribuicao >= 35 && sexo === 'M' )
   {
       if(calc >= 85 && sexo === 'F' || calc >= 95 && sexo === 'M')
       {
           console.log(`${nome} você pode se aposentar`)
       }else{
           console.log(`${nome} você não pode se aposentar`)
       }
   }else{
       console.log(`${nome}, você não pode se aposentar`)
   }