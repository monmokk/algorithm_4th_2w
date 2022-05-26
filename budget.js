function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}


console.log(solution([1,2,3,4,5], 9))
// ~연산자는 뒤집기 연산자.
// 예시는 아
//const a = 5;     // 00000000000000000000000000000101
// const b = -3;    // 11111111111111111111111111111101
//
// console.log(~a); // 11111111111111111111111111111010
// // expected output: -6
//
// console.log(~b); // 00000000000000000000000000000010
// // expected output: 2

//~0; //1
// ~-1 // 0
//~1 // -2
