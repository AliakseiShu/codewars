function sumEvenNumbers(input) {
    return input.filter((el) => el % 2 === 0).reduce((num, sum) => num + sum, 0)
}
