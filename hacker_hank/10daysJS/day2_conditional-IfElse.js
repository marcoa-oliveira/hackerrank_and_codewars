//Complete a função getGrade(score) para retornar uma string (grade) referente ao total de pontos (score)

function getGrade(score){
    let grade
    if(score <= 5){
        grade = 'F'
    } else if(score <= 10){
        grade = 'E'
    } else if(score <= 15){
        grade = 'D'
    } else if(score <= 20){
        grade = 'C'
    } else if(score <= 25){
        grade = 'B'
    } else if(score <= 30){
        grade = 'A'
    } else (
        grade = null
    )

    return grade
}

console.log(getGrade(4))
console.log(getGrade(8))
console.log(getGrade(13))
console.log(getGrade(17))
console.log(getGrade(24))
console.log(getGrade(29))
console.log(getGrade(33))