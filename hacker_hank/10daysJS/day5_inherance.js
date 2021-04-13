/* TASK
implementar um novo método a um prototype já existente
1 - adicionar um método 'area' na classe Rectangle
2 - criar a classe 'Square' satisfazendo as seguintes situações:
    - será uma subclasse de Rectangle
    - terá apenas o próprio construtor e nenhum outro método
    - poderá usar o método 'Area' de Rectangle
*/

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {return this.w * this.h}
//havia declarado com arrow function, mas não funcionou - não entendi direito o motivo mas pode ter a ver com o escopo da arrow function

class Square extends Rectangle {
    
    constructor(w){
        super(w) // herda as propriedade da classe extendida mas chama o contexto de .this para essa classe
        this.w = w
        this.h = w
    }
}


let ret = new Rectangle(5,7)
console.log(ret.area())

let sqr = new Square(5)
console.log(sqr.area())