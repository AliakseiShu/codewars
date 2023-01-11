function rowWeights(array) {
    let t1 = array
        .map((el, i) => (i % 2 === 0 ? el : 0))
        .reduce((acc, sum) => acc + sum, 0);
    let t2 = array
        .map((el, i) => (i % 2 === 1 ? el : 0))
        .reduce((acc, sum) => acc + sum, 0);
    return [t1, t2];
}