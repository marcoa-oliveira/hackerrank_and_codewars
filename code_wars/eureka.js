/*
KATA:
a função deve procurar no intervalo recebido os valores que satisfaçam a seguinte regra:

ex: 89 = 8^1 + 9^2
    135 = 1^1 + 3^2 + 5^3 

a função recebe um intervalo composto pelos parâmetros a,b que representam início e fim.
a função retornará um array contendo os números que atendam a regra ou um array vazio caso não encontre nenhum

 */

function sumDigPow(a, b) {
    let eureka = []

    for(a; a <= b; a++){
        let nums = a.toString().split('')
        
        let test = nums.reduce((acc, cur, idx) => {
                        return acc += Math.pow(cur,idx+1)
                   },0)
        
        if(test === a) eureka.push(test) 
    }
    return eureka
  }

console.log(sumDigPow(1,89))

