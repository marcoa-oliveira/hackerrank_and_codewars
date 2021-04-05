/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
   if(a > 0){
        return "YES"
      } else {
        throw (a === 0 ? new Error('Zero Error') : new Error('Negative Error'))
      }
}


/*
A 'isPositive()' fun��o verifica se 'a' (number) � positivo ou n�o.
Caso n�o seja, lan�a dois tipos de erros diferentes e personalizados para cada
situa��o (0 ou Negativo)
Os erros lan�ados s�o capturados pelo contexto de execu��o da fun��o (quem fez a chamada dela)
*/