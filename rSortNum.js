function solution(n) {
    return parseInt((n+'').split('').sort().reverse().reduce((acc, c) => acc += c))
}

console.log(solution(118372))