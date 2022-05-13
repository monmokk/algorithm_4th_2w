function solution(absolutes, signs) {
//    let answer = 0;

    //  for (let i = 0; i < absolutes.length; i++) {
    //    if (signs[i]) answer += absolutes[i]
    //  else answer -= absolutes[i]
    //}
    return absolutes.reduce((acc, cur, i) => acc + (cur * (signs[i] ? 1 : -1)), 0)
}

/* forEach */
function for_solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    return answer;
}