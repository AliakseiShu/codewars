function enough(cap, on, wait) {
    let count = on + wait
    if (cap > count) {
        return 0
    } else {
        return count - cap
    }
}