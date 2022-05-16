function selectionSort(values, count) {
    let min = 0, tmp = 0;
    for (let i = 0; i < count - 1; i++) {
        min = i;
        for (let j = i+1; j < count; j++) {
            if (values[j] < values[min]) {
                min = j;
            }
        }
        tmp = values[i]
        values[i] = values[min]
        values[min] = tmp

        console.log("Step-%d,", i+1)


    }
}

selectionSort([80,75,10,60,15,49,12,25], 8)