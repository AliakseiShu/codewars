function countPositivesSumNegatives(input) {
<<<<<<< HEAD

    if (input === null) return []
    if (input.filter(n => n != 0).length == 0) return []

=======
>>>>>>> b18006901f77ffb4cfa7ef85b79b017314781bfb
    let positiv = 0
    let notPositiv = 0

    for (const n of input) {
        if (n < 0) notPositiv += n
        if (n > 0) positiv += 1
    }
    return [positiv, notPositiv]
}