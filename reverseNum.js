function solution(n) {
    return (n+'').split('').map(cur => +cur).reverse()
}

console.log(solution(12345))