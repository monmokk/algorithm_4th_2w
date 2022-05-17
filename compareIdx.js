function solution(strings, n) {
    return strings.sort(function (a, b) {
        return a[n] === b[n]? a.localeCompare(b) : a[n].localeCompare(b[n])
    })
}

console.log(solution(["sun", "bed", "car"], 1))