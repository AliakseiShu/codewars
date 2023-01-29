function solve(arr) {
    return arr
        .reverse()
        .filter((el, i) => arr.indexOf(el) === i)
        .reverse()
}