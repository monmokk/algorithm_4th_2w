function solution(sizes) {
    let wh = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let max = [0, 0];
    wh.forEach(([w, h]) => {
        if (w > max[0]) max[0] = w;
        if (h > max[1]) max[1] = h;
    })
    return max[0]*max[1];
}

function ppSolution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(ppSolution([[60, 50], [30, 70], [60, 30], [80, 40]]))