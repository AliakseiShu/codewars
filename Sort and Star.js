function twoSort(s) {
    return s.sort()[0].split('').map((el)=> el + "***").join('').slice(0, -3)
}