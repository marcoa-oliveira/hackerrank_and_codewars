function narcissistic(value) {
    // Code me to return true or false
    const pow = value.toString().length
    let test = value
                .toString()
                .split('')
                .reduce((acu, cur) => {
                    console.log(pow)
                    return acu += Math.pow(cur, pow)
                },0)
    return test === value? true : false
}

console.log(narcissistic(153))