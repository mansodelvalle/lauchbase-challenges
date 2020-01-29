/* ============================================
        DESAFIO 7 - OPERAÇÕES BANCÁRIAS
   ============================================ */

const user = {
    name: 'Mariana',
    transactions: [],
    balance:0
}


function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function showBalanceMessage()
{
    return user.balance
}

function getHigherTransactionByType(type)
{  
    
    let higherTransactionValue = 0
    let higherTransaction

    for(let transaction of user.transactions)
    {
        if(transaction.type == type && transaction.value > higherTransactionValue)
        {
            higherTransactionValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction

}

function getAverageTransactionValue()
{
    let averageTransaction = 0

    for(let transaction of user.transactions)
    {
        if(transaction.type == 'debit' || transaction.type == 'credit')
        {
            averageTransaction += ( transaction.value / user.transactions.length )
        } 
    }
    return averageTransaction
}

function getTransactionsCount()
{
    let transactionsCount = {
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions)
    {
        if(transaction.type === 'credit')
        {
            transactionsCount.credit++
        }else{
            transactionsCount.debit++
        }
    }
    return transactionsCount
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(showBalanceMessage()) // Balance : 60

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // {credit: 2, debit: 2}