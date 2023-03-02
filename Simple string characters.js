function solve(s){
    let upper = (s.match(/[A-Z]/g) || []).length,
        lower = (s.match(/[a-z]/g) || []).length,
        number = (s.match(/[0-9]/g) || []).length,
        special = s.length - upper - lower - number
    return [upper, lower, number, special]
}
