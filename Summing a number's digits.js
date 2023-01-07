function sumDigits(number) {
    if (number === 0) return 0
    return number > 0 ? String(number).split('').reduce((acc, curr) => +acc + +curr) : String(-number).split('').reduce((acc, curr) => +acc + +curr)
}