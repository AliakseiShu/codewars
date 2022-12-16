function derive(coefficient,exponent) {
    const newExponent = (exponent - 1)
    const result = (coefficient * exponent)
    return `${result}x^${newExponent}`
}