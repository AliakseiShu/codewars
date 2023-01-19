function reverseNumber(n) {
    return n >= 0
        ? parseInt(n.toString().split("").reverse().join(""))
        : -1 * parseInt(n.toString().split("").reverse().join(""));
}