const reverseSeq = n => {
    const results = []

    for(let i = n; i > 0; --i) {
        results.push(i)
    }
    return results;
};