function arrayPlusArray(arr1, arr2) {

    let sumArry1 = arr1.reduce((sum, cur) => sum + cur, 0)
    let sumArry2 = arr2.reduce((sum, cur) => sum + cur, 0)

    return sumArry1 + sumArry2; //something went wrong
}