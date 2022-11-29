function nameShuffler(str){
    return str.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3$2$1')
}