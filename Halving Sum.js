function halvingSum(n) {
    let num = 0
    while (n !== 0) {
        num += n
        n = Math.floor(n / 2)
    }
    return num
}
