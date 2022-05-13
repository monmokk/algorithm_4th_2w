process.stdin.setEncoding('utf8'); // 표준입출력
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const row = '*'.repeat(a)

    for(let i =0; i < b; i++) return row

});