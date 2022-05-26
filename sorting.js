// function solution(n) {
//     return n.filter((el, i)=> n.indexOf(el) === i).sort((a, b)=> a-b)
// }
// console.log(solution([5,5,2,3,4,1]))

function checkOne(n) {
    return n.toString(2).split('').reduce((acc, cur)=> acc + Number(cur), 0)
}
console.log(checkOne(32))