function solution(price, money, count) {
    let tmp = 0;
    for (let i = 1; i <= count; i++) {
        tmp += price * i;
    }
    return money > tmp ? 0 : tmp - money
}

/* 가우스 공식 */
/* 1~100의 모든 합 : 10₩ * 50 */
function gaus_solution(price, money, count) {
    let tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}