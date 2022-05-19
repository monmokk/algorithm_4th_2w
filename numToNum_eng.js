function solution(s) {
    let answer = s;
    const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < NUM.length; i++) {
        let tmp = answer.split(NUM[i])
        answer = tmp.join(i)
    }
    return Number(answer)
}

// function solution(s) {
//     let answer = s
//     const NUM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//
//     for (let i = 0; i < NUM.length; i++) {
//         let tmp = answer.split(NUM[i])
//         answer = tmp.join(i)
//     }
//     return NUM.reduce((acc, cur, idx) => acc += s.split(cur).join(idx+''), '')
// }

function rep_solution(s) {
    s = s.replace(/zero/g, 0)
        .replace(/one/g, 1)
        .replace(/two/g, 2)
        .replace(/three/g, 3)
        .replace(/four/g, 4)
        .replace(/five/g, 5)
        .replace(/six/g, 6)
        .replace(/seven/g, 7)
        .replace(/eight/g, 8)
        .replace(/nine/g, 9)
    return parseInt(s);
}

function char_solution(s) {
    const charMap = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }

    for(let [key, value] of Object.entries(charMap)) {
        let re = new RegExp(key,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}

console.log('for',solution('1zerotwozero3'))
console.log('reg_repl',rep_solution('1zerotwozero3'))
console.log('char',char_solution('1zerotwozero3'))
