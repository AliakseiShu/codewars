function findDifference(a, b) {
    const v1 = a.reduce((acc, num) => acc * num)
    const v2 = b.reduce((acc, num) => acc * num)
    return v1 > v2 ? v1 - v2 : v2 - v1
}
