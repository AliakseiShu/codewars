function gimme (triplet) {
    const arr = triplet
    const num = [...arr].sort((a,b)=> a - b)[1]
    return triplet.indexOf(num)

}