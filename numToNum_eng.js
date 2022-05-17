function solution(s) {
    let answer = s;
    const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < NUM.length; i++) {
        let tmp = answer.split(NUM[i])
        answer = tmp.join(i)
    }
    return answer
}

console.log(solution('one4seveneight'))
