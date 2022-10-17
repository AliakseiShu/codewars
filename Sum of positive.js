function positiveSum(arr) {
    return arr.reduce((sum, current) => sum + (current > 0 ? current : 0), 0)
}