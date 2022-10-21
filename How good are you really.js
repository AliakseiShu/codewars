function betterThanAverage(classPoints, yourPoints) {
    const arr = classPoints.reduce((acc, number) => acc + number, 0)
    const lenght = classPoints.length
    const average = arr/lenght
    const result = average > yourPoints ? false : true
    return result
}