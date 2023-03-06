function findLongest(array) {
    return array.reduce((a, b) => (String(b).length > String(a).length ? b : a))
}