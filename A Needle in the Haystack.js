function findNeedle(haystack) {
    let idx = haystack.indexOf('needle')
    if(idx !== -1 ) {
        return `found the needle at position ${idx}`
    }
}