/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
      let word = s.split('').reverse().join('')
      console.log(word)   
    } catch (error) {
      console.log(`${error.message}\n${s}`)
    }
}

/*
A função recebe uma string por parâmetro e tenta (try) executar a operação de
quebrar a string em um array (split), inverter a ordem deste array (reverse) e depois
reconstruir a string (join) para gerar uma palavra invertida.

Essas operações só podem ser realizadas quando uma STRING é recebida, sendo assim,
ao passarmos um número (number) ou qualquer outro tipo de dado, um erro é lançado (catch) e
uma mensagem é apresentada.
*/