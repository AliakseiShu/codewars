var min = function(list){

    return list.reduce((cur, num) => cur > num ? num : cur)
}

var max = function(list){

    return list.reduce((cur, num) => cur > num ? cur : num)
}