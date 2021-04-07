function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(item => typeof item === 'number' && item >= 0)
}

/*
  Challange:  create a function that takes a list of non-negative 
  integers and strings and returns a new list with the strings filtered out.

  Criar uma função que receba um array contendo número positivos e negativos, strings e etc e retorne um
  novo array contendo apenas os números inteiros positivos.

  .filter() -> retorna um novo array baseado no resultado (true/false) retornado pela função que recebe
  como parâmetro.

  Neste caso, passamos o argumento 'item' que corresponde ao item do array que está sendo iterado
  e submetemos a duas comparações:
    - se é um number
    - se é maior que 0

  O 'item' que retornar verdadeiro para as duas condições, fará parte do novo array
*/