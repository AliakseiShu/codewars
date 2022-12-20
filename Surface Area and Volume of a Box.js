function getSize(width, height, depth){
    let s = 2*(width * height + height * depth + depth * width)
    let v = width * height * depth
    return [s,v]
}