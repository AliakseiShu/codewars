function doubleChar(str) {
    let result = "";
    for (const value of str) {
        result = result + value + value
    }
    return result
}