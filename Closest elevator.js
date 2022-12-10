function elevator(left, right, call){
    return Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right'
}