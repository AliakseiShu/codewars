function array(arr){
    if(arr.length <= 3) return null
    const newArr = arr.split(',').slice(1,-1).join(' ')
    return newArr === '' ? null : newArr
}