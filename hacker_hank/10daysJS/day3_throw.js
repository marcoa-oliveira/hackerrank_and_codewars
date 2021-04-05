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
A 'isPositive()' função verifica se 'a' (number) é positivo ou não.
Caso não seja, lança dois tipos de erros diferentes e personalizados para cada
situação (0 ou Negativo)
Os erros lançados são capturados pelo contexto de execução da função (quem fez a chamada dela)
*/