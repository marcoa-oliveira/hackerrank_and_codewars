//Criar uma função que receba um array com 10 posições e converta em um número de telefone (padrão americano)
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const arrayNum = [0,1,2,3,4,5,6,7,8,9]

function arrayToPhoneNumber(arr){
    let number = arr.join('')
    //if(number.length !== 10) {return `not a phone number!`} verificação não solicitada no kata
    return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6,10)}`
}

console.log(arrayToPhoneNumber(arrayNum))
console.log(arrayToPhoneNumber([1,2,3,4]))