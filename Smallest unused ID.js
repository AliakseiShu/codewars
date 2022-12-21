function nextId(ids){
    return ids.sort((a,b) => a - b).reduce((prev, curr) => prev + (prev == curr),0)
}