//Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

/*
 * Create the function factorial here
 */
function factorial(n){
    for(let x = n-1; x >= 1; x--){
        n *= x
    }
    
    return n 
}