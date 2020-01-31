/* =============================================
        DESAFIO 2 - Cálculo de aposentadoria
   ============================================= */

   const name = 'Silvana'
   const genre = 'M'
   const age = 48
   const contribution = 23
   const calc = (age + contribution) 

   if(contribution >= 30 && genre === 'F' || contribution >= 35 && genre === 'M' )
   {
       if(calc >= 85 && genre === 'F' || calc >= 95 && genre === 'M')
       {
           console.log(`${name} você pode se aposentar`)
       }else{
           console.log(`${name} você não pode se aposentar`)
       }
   }else{
       console.log(`${name}, você não pode se aposentar`)
   }