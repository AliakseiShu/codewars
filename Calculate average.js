function findAverage(array) {
    const count = array.reduce((acc, number) => acc + number, 0)
    const result = count/array.length
    if(result > 0) {
        return result
    } else {
        return 0
    }
}