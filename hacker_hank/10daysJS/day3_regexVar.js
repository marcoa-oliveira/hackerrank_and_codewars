function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).+\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

//  ^ => primeiro item encontrado
// () => armazena o valor encontrado que atenda a especificação interna
// [aeiou] => flag de especificação (itens que contenham alguma das strings)
// . => busca todas as strings a seguir
// + => para 1 ou mais ocorrências (isso garante que str.length > 3)
// \1 => corresponde aos resultados armazenados anteriormente, no caso 1. 
    // \2 se usarmos 2, faremos referência a duas instâncias de resultados e assim por diante 

//  $ garante que o item correspondente está no final da sequência