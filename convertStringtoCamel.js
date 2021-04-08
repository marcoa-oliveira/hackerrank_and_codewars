/*
Criar uma função que converta strings separadas por (-) ou (_) em padrão camelCase.
    - A primeira letra da primeira palavra deve ser mantida como está (se maiúscula ou minuscula)
*/

function toCamelCase(str){
    return str
            .split('')
            .map((char, index, array) => {
                if(char === '-' || char === '_'){
                    array[index+1] = array[index+1].toUpperCase()
                }
                return char
            })
            .filter(char => char !== '-' & char !== '_')
            .join('')
}



console.log(toCamelCase('palavra-teste'))
console.log(toCamelCase('Palavra_teste2'))


/*
A string é recebida e desmembrada em um array. Esse array é percorrido (.map) em busca de '-' ou '_', e quando
um dos dois caracteres é encontrado, o caracter seguinte é alterado para letra maiúscula (.toUpperCase()).

Por fim, os '-' e '_' são removidos do array (.filter()) e a string é remontada (join(''))
*/