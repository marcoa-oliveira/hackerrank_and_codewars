/*Friend or Foe
Crie uma função que filtre um array de strings e retorne um novo array contendo apenas os termos compostos por 4 letras
*/

function friend(friends){
    //your code here
    return friends.filter(friend => friend.length === 4)
}


let names = ['Ana', 'Paul','Isac','Marie','Bob']
console.log(friend(names))