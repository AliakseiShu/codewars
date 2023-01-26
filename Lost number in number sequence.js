function findDeletedNumber(arr, mixArr) {
    const resultSort = mixArr.sort((a, b) => a - b)
    return arr.filter((el, i) => resultSort.indexOf(el) == -1)[0] || 0
}