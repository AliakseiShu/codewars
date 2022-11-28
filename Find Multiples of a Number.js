function findMultiples(integer, limit) {
    let array = []
    for (let i=integer; i<=limit; i = i + integer) {
        array.push(i)
    }
    return array
}
