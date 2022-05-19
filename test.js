function solution(n){
    let answer = (n+'').split('').reverse()
    let answer_p = answer.reduce((acc, cur) => acc += '+'+cur)
    return answer_p + '=' +answer.reduce((acc, cur) => acc += Number(cur),0)
}
console.log(solution(718253))