function findOutlier(integers) {
    let result1 = integers.filter((el) => el % 2),
        result2 = integers.filter((el) => el % 2 == 0)
    return result1.length == 1 ? result1[0] : result2[0]
}