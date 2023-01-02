function reverseLetter(str) {
    return str.replace(/[^a-zа-яё]/gi, '').split('').reverse('').join('')
}