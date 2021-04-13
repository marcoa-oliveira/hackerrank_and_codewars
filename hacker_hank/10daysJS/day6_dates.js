/*
    TASK:
    desenvolver uma função que retorne o dia da semana de uma data passada por parâmetro seguindo o padrão MM/DD/YYYY
 */

function getDayName(dateString) {
    let dayName =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayIndex = new Date(dateString) 

    
    return dayName[dayIndex.getDay()];
}

console.log(getDayName('04/12/2021'))