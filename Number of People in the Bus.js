var number = function(busStops){
    return busStops.map((el)=> el.reduce((a, b) => a-b)).reduce((a, b) => a+b)
}