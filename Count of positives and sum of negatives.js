function countPositivesSumNegatives(input) {
    let positiv = 0
    let notPositiv = 0

    for (const n of input) {
        if (n < 0) notPositiv += n
        if (n > 0) positiv += 1
    }
    return [positiv, notPositiv]
}