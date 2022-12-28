function oddOrEven(array) {
    const result = array.reduce((acc, curr)=> acc + curr,0) % 2 === 0
    return result ? "even" : "odd"
}