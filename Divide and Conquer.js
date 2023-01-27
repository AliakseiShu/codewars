function divCon(x) {
    const str = x
        .filter((el) => typeof el === 'string')
        .reduce((acc, sum) => +acc + +sum, 0)
    const num = x
        .filter((el) => typeof el === 'number')
        .reduce((acc, sum) => acc + sum, 0)
    return num - str
}