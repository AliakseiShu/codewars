function maxDiff(list) {
    if(list.length == 0) return 0
    return list ? Math.max(...list) - Math.min(...list) : 0
}