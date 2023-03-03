function min(arr, toReturn) {
    if (toReturn === 'value') {
        return Math.min(...arr)
    } else if (toReturn === 'index') {
        let result = Math.min(...arr)
        return arr.indexOf(result)
    }
}