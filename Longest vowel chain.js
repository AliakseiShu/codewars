function solve(s) {
    return Math.max(...s.split(/[^aoeiu]/i).map((el) => el.length))
}