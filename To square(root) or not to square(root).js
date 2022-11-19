function squareOrSquareRoot(array) {
    return array.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2)
}