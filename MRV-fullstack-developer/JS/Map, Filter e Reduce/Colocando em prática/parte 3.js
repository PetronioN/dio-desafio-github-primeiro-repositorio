function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [2, 1, 4, 5, 7, 6, 30, 20, 10, 22];

console.log(filtraPares(nums));