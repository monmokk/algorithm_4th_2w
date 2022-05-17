function solution(numbers) {
    let answer = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            if (!answer.includes(sum)) answer.push(sum);
        }
    }

    return answer.sort((a, b) => a - b);

    //todo 1. idx를 순회 모든 숫자가 다 서로 sum 2. 중복되지 않는 값만 넣기 3. sorting
    //let set_num = Set()
    // return set_num.add(numbers.map((cur, idx) => cur + numbers[idx + 1]))

}

console.log(solution([5,0,2,7]))




