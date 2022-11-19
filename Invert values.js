function invert(array) {
    return array.map(el => el ? -el : -0)
}