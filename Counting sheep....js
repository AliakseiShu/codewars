function countSheeps(arrayOfSheep) {
    let count = arrayOfSheep.reduce((acc, value) => acc + (value ? 1 : 0))
    return count
}