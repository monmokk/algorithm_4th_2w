function solution(num) {

    return num % ((num+'').split('').reduce((acc, cur) => +acc + +cur))? false : true
}

console.log(solution(18))