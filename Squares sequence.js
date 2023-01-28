function squares(x, n) {
    return Array.from({ length: n }, (_, i) => (i == 0 ? x : (x *= x)))
}