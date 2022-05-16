function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(''), 3)
}

const ssolution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
} //화살표함수. js에서 함수를 정의하는 방법.

console.log(solution(45))
console.log(ssolution(45))