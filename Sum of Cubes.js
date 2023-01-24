function sumCubes(n) {
    return Array.from({length:n},(_, index) => (index + 1) ** 3)
        .reduce((acc, curr) => acc + curr)
}