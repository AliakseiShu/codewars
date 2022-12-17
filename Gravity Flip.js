const flip=(d, a)=>{
    if(d === 'R') {
        return a.sort(function(a, b){
            return a-b
        })}
    return a.sort(function(a, b){
        return a-b
    }).reverse()
}