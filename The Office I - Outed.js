function outed(meet, boss) {
    let result = Object.keys(meet)
    return result.reduce((prev, curr) => prev + meet[curr] * (boss == curr ? 2 : 1), 0) / result.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}