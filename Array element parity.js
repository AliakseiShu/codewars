function solve(arr) {
    let num = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(-1 * arr[i])) num.push(arr[i])
    }
    return num[0]
}