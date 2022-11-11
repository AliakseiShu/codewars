function highAndLow(numbers){
    const arr = numbers.split(' ')
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const count = [max, min]
    const cur = count.sort((a, b)=> {
        return b-a
    })
    return cur.join(' ')
}