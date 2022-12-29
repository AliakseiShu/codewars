function squareDigits(num){
    return +(String(num).split('').map((el) => Math.pow(+el, 2)).join(''))
}