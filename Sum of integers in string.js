const sumOfIntegersInString = (s) => {
    let result = 0
    str = ''
    s += 'a'
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            str += s[i]
        }
        if (isNaN(s[i]) && !isNaN(s[i - 1])) {
            result += Number(str)
            str = ''
        }
    }
    return result
}
