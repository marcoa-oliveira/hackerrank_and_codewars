/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let second = nums.filter((a,b) => nums.indexOf(a) === b)
                    .sort((a,b) => b - a)
    return second[1]
}

/*
a variável "second" recebe o array "num" filtrado para remover valores repetidos e inversamente ordenado (do maior para o menor), assim garantimos que o SEGUNDO MAIOR VALOR sempre estará no segundo indice do array.
*/