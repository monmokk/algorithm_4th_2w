function solution(lottos, win_nums) {
    const RANK = [6, 6, 5, 4, 3, 2, 1];

    let min = lottos.filter((el) => win_nums.includes(el)).length;
    let zero = lottos.filter((el) => el === 0).length; // !el값도 0
    let sum = min + zero;
    return [RANK[sum], RANK[min]];
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))