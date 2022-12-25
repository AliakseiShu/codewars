function numberToPower(number, power){

    if (power === 0) return 1;
    if (number === 0) return 0;
    if (number === 1) return 1;

    let result = 1;
    while (power !== 0) {
        result = result * number;
        power = power - 1;
    }

    return result;
}