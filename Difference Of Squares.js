function differenceOfSquares(n) {
    let result = 0
    for (let i = 0; i <= n; i++) {
        result += i
    }
    let res1 = result ** 2

    let result2 = 0
    for (let i = 0; i <= n; i++) {
        result2 += i ** 2
    }

    return res1 - result2
}