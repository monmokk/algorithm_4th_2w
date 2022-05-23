function solution(n){
    let answer = (n+'').split('').reverse()
    let answer_p = answer.reduce((acc, cur) => acc += '+'+cur)
    return answer_p + '=' +answer.reduce((acc, cur) => acc += Number(cur),0)
}
console.log(solution(718253))
// let sum = 0
// for (let i = 0; i < 5; i++) {
//     sum +=i
// }
// console.log(sum)