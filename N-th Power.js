function index(array, n){
    const result = array.find((_,i) => i === n)
    return result ? result ** n : -1
}