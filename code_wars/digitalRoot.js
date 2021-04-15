/* 
Realizar a soma recursiva de número até que retorne um único digito
ex:
16 -> 1 + 6 = 7
942 -> 9 + 4 + 5 = 15 -> 1 + 5 = 6
*/

function digital_root(n) { //192
    let result = n
                .toString() // "192"           
                .split('') // ['1','9','2']
                .map(num => parseInt(num))//[1,9,2]
                .reduce((acc,cur) => {
                    return acc += cur //1 + 9 + 2 = 12
                },0)

    return result.toString().length > 1? digital_root(result) : result
    //recursão: se result tiver mais de 1 digito, a função é chamada novamente recebendo
    //como parâmetro o valor de result até que reste apenas um dígito
}

console.log(digital_root(192)) //3