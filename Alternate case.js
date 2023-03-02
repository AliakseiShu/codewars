function alternateCase(s) {
    return s
        .split('')
        .map((el) =>
            el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
        )
        .join('')
}