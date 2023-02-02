function repeats(arr) {
    const result = arr.filter((el, i) => arr.lastIndexOf(el) !== i)
    return arr
        .filter((el, i) => !result.includes(el))
        .reduce((acc, curr) => acc + curr, 0)
}