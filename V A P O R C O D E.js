function vaporcode(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            result += string[i] + '  '
        }
    }
    return result.toUpperCase().trim()
}