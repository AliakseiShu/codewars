function getNumberFromString(s) {
    const numEl = parseInt(s.replace(/[^\d]/g, ''))
    return numEl
}