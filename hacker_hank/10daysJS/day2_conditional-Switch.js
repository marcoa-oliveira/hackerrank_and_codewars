//definir letter de acordo com a letra inicial da string recebida por getLetter

function getLetter(s){  
    let letter

    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A'        
            break;
        
        case 'bcdfg'.includes(s[0]):
            letter = 'B'
            break;
        
        case 'hjklmn'.includes(s[0]):
            letter = 'C'
            break;
        
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D'
            break;
    
        default:
            letter: null
            break;
    }

    return letter
    
}

console.log(getLetter('afagsdgsg'))
console.log(getLetter('uhgfujgsdg'))
console.log(getLetter('laslf'))
console.log(getLetter('1234'))
