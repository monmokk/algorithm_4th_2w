function solution(n)
{
    return n.toString().split('').map(i => parseInt(i)).reduce((acc, cur) => acc+=cur, 0)
}

console.log(solution(987))