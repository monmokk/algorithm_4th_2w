function solution(arr) {
    return arr.filter((el,idx) => el != arr[idx+1]);
}

console.log(solution([1,1,3,3,0,1,1]))