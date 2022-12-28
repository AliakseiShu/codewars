function reverseWords(str) {
    const strR = str.split(' ').map((el) => el.split('').reverse().join(''))
    return strR.join(' ')
}