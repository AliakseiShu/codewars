function sumOfMinimums(arr) {
    return arr
        .filter((el) => el.sort((a, b) => a - b))
        .reduce((acc, sum) => acc + sum[0], 0);
}