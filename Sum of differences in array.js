function sumOfDifferences(arr) {
    if(arr.length <= 0 ) return 0
    const result = arr.sort((a,b)=> b-a)
    let sum = 0
    for (let i = 0; i < result.length-1; ++i) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}