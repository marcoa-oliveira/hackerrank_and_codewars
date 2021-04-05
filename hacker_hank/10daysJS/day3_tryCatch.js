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
A fun��o recebe uma string por par�metro e tenta (try) executar a opera��o de
quebrar a string em um array (split), inverter a ordem deste array (reverse) e depois
reconstruir a string (join) para gerar uma palavra invertida.

Essas opera��es s� podem ser realizadas quando uma STRING � recebida, sendo assim,
ao passarmos um n�mero (number) ou qualquer outro tipo de dado, um erro � lan�ado (catch) e
uma mensagem � apresentada.
*/