function mergeArrays(arr1, arr2) {
    let array = [...arr1, ...arr2]
    return array.sort((a,b)=> a-b).filter((el,i) => array.indexOf(el)===i)
}