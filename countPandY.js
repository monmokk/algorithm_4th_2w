function solution(s){

    return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length

}


console.log('P' === 'p')
console.log(solution('pPoooyY'))