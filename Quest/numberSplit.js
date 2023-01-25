
numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);

function numberSplit(data) {

    let tmp = Math.round(data / 2);
    if (tmp + tmp == data) console.log(`(${tmp}, ${tmp})`);
    else console.log(`(${tmp - 1}, ${tmp})`);
}