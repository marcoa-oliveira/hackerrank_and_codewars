let text = 'textodeteste'

function vowelsAndConsonants(s) {
    let vowel = []
    let cons = []
    
    s.split('')
        .forEach(letter => {
            'aeiou'.includes(letter)? vowel.push(letter) : cons.push(letter)
        })

    vowel.forEach(vowel => {
        console.log(vowel)
    })
    cons.forEach(cons => {
        console.log(cons)
    })
}

vowelsAndConsonants(text)