function explode(s) {
    return s
        .split('')
        .map((n) => {
            let num = ''
            for (let i = 0; i < n; i++) {
                num += n
            }
            return num
        })
        .join('')
}