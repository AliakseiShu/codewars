function multiplyAll(array) {
    return function (num) {
        return array.map((el) => el * num)
    }
}