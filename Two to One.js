function longest(s1, s2) {
    return [...s1, ...s2].filter((el, i)=> [...s1, ...s2].indexOf(el) === i).sort().join('')
}