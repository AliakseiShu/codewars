function getAverage(marks){
    return Math.floor(marks.reduce((sum, cur) => sum + cur,0)/marks.length)
}