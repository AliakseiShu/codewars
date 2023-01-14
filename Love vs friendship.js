function wordsToMarks(string) {
    return [...string].map((el, i) => el.charCodeAt(0) - 96).reduce((num, sum) => num + sum);
}