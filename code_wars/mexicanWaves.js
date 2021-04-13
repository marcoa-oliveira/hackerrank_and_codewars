function wave(str){    
    let waves = []

    for(let x = 0; x < str.length; x++){
        let word = str.split('') //quebra a string em um array de char

        if(word[x] !== ' '){ //verifica se o char iterado não é um espaço
            word[x] = word[x].toUpperCase() //altera o char para maiúsculo
            waves.push(word.join('')) //torna o array em palavra novamente e insere no array waves
        }
        
        //waves.push(word.join('')) colocado do lado de fora, não passa no teste pois inclui no
        //novo array os elementos que possuem espaço como primeiro char. esses acabam não sendo alterados
        //e devem ser excluidos
    }

    return waves
}

console.log(wave('teste'))
console.log(wave('teste espacado'))
console.log(wave(' '))
console.log(wave(' teste com espaco antes e depois '))