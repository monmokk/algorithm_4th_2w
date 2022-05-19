function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            continue
        }
        const upperOrLower = upper.includes(s[i]) ? upper : lower;
        let index = upperOrLower.indexOf(s[i]) + n;
        if (index >= upperOrLower.length) index -= upperOrLower.length;
        answer += upperOrLower[index]
    }
    return answer;
}

function ascii_solution(s, n) {
    return s.split('').reduce((acc, cur, i, arr) => acc += String.fromCharCode(s.charCodeAt(i) > 96? (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65), '' )
}
console.log(solution("a B z", 1))
console.log(ascii_solution("a B z", 1))