function solution(answers) {
    let answer = [];
    let s1 = [1, 2, 3, 4, 5];
    let s2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let s3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    //for _ of
    let s1_count = answers.filter((el,i)=> el === s1[i%s1.length]).length;
    let s2_count = answers.filter((el,i)=> el === s2[i%s2.length]).length;
    let s3_count = answers.filter((el,i)=> el === s3[i%s3.length]).length;
    let max = Math.max(s1_count,s2_count,s3_count);

    if (s1_count === max) {answer.push(1)};
    if (s2_count === max) {answer.push(2)};
    if (s3_count === max) {answer.push(3)};

    return answer;
}


let loadDt = new Date('2022/05/17');
console.log(new Date(Date.parse(loadDt) + 98 * 1000 * 60 * 60 * 24));

// const today = new Date('2022.02.01')
// today.setDate(today.getDate() + 98)
// console.log(today)