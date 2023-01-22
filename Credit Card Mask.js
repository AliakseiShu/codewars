function maskify(cc) {
    return cc
        .split('')
        .map((el, idx) => (idx < cc.length - 4 ? '#' : el))
        .join('')
}