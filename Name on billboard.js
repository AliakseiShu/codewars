function billboard(name, price = 30){
    return name.split('').fill(price).reduce((acc, curr) => acc + curr)
}