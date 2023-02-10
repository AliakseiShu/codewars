function myLanguages(results) {
    let res = []
    for (let i in results) {
        if (results[i] > 59) {
            res.push(i)
        }
    }
    return res.sort((a, b) => {
        return results[b] - results[a]
    })
}