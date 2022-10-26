function XO(str) {

    let x = ''
    let y = ''
    for (let i=0; i<str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x = x + str[i]
        } else if(str[i].toLowerCase() === 'o') {
            y = y + str[i]
        }
    }
    return x.length === y.length
}