/*TASK 
Criar a classe 'Polygon' com as seguintes propriedades:
- um constructor que recebe um array de números inteiros que descrevem os lados do poligono
- um método chamado 'perimeter()' que retorna o perímetro do polígono
*/

class Polygon{
    constructor(arr){
        this.polygonSides = arr;
    }

    perimeter(){
        return this.polygonSides.reduce((acc,curr) => acc + curr)
    }
}

let poli = new Polygon([5,5,5,5])
console.log(poli.perimeter())

/*
perimeter retorna um reduce do array informado somando os valores existentes dentro do array.
o ponto de partida do reducer naão foi passado, então o acumulador (acc) inicia com valor = 0.
*/