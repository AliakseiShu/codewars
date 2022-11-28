function remove (string) {
    let last = string.length -1
    return string[last] === '!' ? string.slice(0, -1) : string
}
console.log(remove("Hi!"));