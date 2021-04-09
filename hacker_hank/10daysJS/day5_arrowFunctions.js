/*TASK
complete a função 'modifyArray' que recebe um único parâmetro (um array 'nums') e verifica se o valor é
par ou impar.
- se for par, multiplicar por 2
- se for impar, multiplcar por 3
- ao final, retornar o array modificado
*/

function modifyArray(nums) {
    return nums.map(num => num%2 === 0? num*2 : num*3)
}