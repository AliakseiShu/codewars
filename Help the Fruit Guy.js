function removeRotten(bagOfFruits) {
    return bagOfFruits
        ? bagOfFruits.map((el) =>
            el.slice(0, 6) == 'rotten' ? el.slice(6).toLowerCase() : el
        )
        : []
}