var countBits = function(n) {
    if (n >= 0 && typeof n === 'number'){
        return n.toString(2)
                  .split('')
                  .map(bin => parseInt(bin))
                  .reduce((curr, total) => total + curr)
    } else {
        return new Error('Valor Inválido!')
    }
  };

  /*Step-by-step
  
  1. verificamos se o valor passado não é negativo ou se é mesmo um número, assim uma string ou negativo 
  geram um erro ('Valor Inválido')

  2. passando pelo teste, retornamos o valor de 'n':
    - .toString(2) -> converte para base binária (mas esse valor é apresentado como STRING);
    - .split('') -> quebra a string gerando um array (mas continua sendo string então qualquer tentativa
        de somar os valores retornaria a string binária original)
    - .map(bin => parseInt(bin)) -> gera um novo array com os valores convertidos em int
    - .reduce() -> agora, com os valores convertidos, podemos reduzir o array a um valor total somando os 
        elementos deste
  */