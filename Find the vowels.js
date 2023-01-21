function vowelIndices(word) {
    let result = []
    let vowels = 'aeiouyAEIOUY'
    word.split('').forEach((letter, i) => {
        if (vowels.includes(letter)) {
            result.push(i + 1)
        }
    })
    return result
}