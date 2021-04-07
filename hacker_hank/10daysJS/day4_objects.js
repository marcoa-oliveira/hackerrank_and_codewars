//objetos são uma coleção de propriedade
//propriedades são uma associação 'chave' - 'valor'
//metodo é uma função que está associada a uma chave
//objectName.propertyName

/*TASK
Complete a função abaixo. Ela possui 2 parâmetros (a,b) e retornará um objeto de modelo de um retângulo com
as seguintes propriedades:

length = a
width = b
perimeter = 2*(a + b)
area = a * b

os atributos devem ser nomeados corretamente para que o teste seja aceito

os valores de 'a' e 'b' devem ser positivos e diferentes de zero.
*/

function Rectangle(a, b) {
    this.length = a
    this.width = b
    this.perimeter = 2*(a+b)
    this.area = a * b
}

let ret = new Rectangle(2,7)
console.log(ret.length)
console.log(ret.width)
console.log(ret.perimeter)
console.log(ret.area)