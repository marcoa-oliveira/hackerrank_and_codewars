/*TASK
Complete a função abaixo que recebe como parâmetro um array de objetos (a). Cada objeto do array tem 
duas propriedades (int x, int y). A função deverá retornar a contagem de todos os objetos no array
que satisfaçam o.x == o.y
*/

function getCount(objects) {
    return objects.filter(obj => obj.x === obj.y).length
}

/*
objects.filter: faz um filtro no array recebido retornando um novo array contendo apenas os objetos que
atendem à condição [valor de obj.x === valor de obj.y]

.length: faz a contagem de itens existentes neste novo array e retorna o tamanho total do array.
        ex: [ {'x': 2, 'y': 2}, {'x': 5, 'y': 5} ] o length será = 2
*/