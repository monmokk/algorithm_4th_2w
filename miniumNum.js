function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1) //메서드로서의 동작과 결과물
    return arr.length? arr : [-1]
}

console.log(solution([10]))
