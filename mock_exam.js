function solution(arr1, arr2){
    return arr2.map(cur => cur < 29 ? cur : 21 ).reduce((acc, cur, idx) => acc + (cur - arr1[idx]), 0)
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))