/*
TASK
- complete a função sides que retorna s1 e s2 de acordo com a fórmula: 
    s1 = (P + sqrt(P^2 - 16*A))/4 e s2 = (P - sqrt(P^2 - 16*A))/4

- crie um array que receba os valores de s1 e s2 em ordem crescente
- retorne esse array 
*/
function sides(literals, ...expressions) {
    const [A,P] = expressions //atribuição por desestruturação
  
    const root = Math.sqrt((P*P) - (16*A))
    const s1 = (P + root)/4
    const s2 = (P - root)/4
  
    console.log(literals[0]+A+literals[1]+P)
  
    return [s1,s2].sort()
  }
                //A                P
  sides`Area = ${10}, Perimetro = ${14}.`

  /*
  a função 'sides' recebe uma TEMPLATE STRING passando dois valores (A e P),
  realiza o calculo e devolve os valores de (s1) e (s2) em ordem crescente
  */