function uefaEuro2016(teams, scores){
    if(scores[0] === scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    const result = scores[0] > scores[1] ? teams[0] : teams[1]
    return `At match ${teams[0]} - ${teams[1]}, ${result} won!`
}