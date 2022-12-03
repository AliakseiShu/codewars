function arrayMadness(a, b) {
    let resultA = a.reduce((acc, cur)=> acc + cur ** 2, 0)
    let resultB = b.reduce((acc, cur)=> acc + cur ** 3, 0)
    return resultA>resultB ? true : false
}