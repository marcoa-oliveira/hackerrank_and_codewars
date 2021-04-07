    function squareDigits(num){
        //may the code be with you
        if(typeof num !== 'number'){
            return new Error('Valor Inválido!')
        }
      
        return parseInt(num.toString()
          .split('')
          .map(n => Math.pow(n,2))
          .join(''))
    }