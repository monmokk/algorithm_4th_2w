function solution(s) {
    // return (s.length === 4 || s.length === 6) && Number.isInteger(Number(s))
    return (s.length === 4 || s.length === 6) && s ==  parseInt(s)
}


function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

console.log(solution('2234'))