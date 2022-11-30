function warnTheSheep(queue) {
    const numberSheep = queue.reverse().indexOf("wolf")
    if (numberSheep === 0 || queue === "wolf") {
        return "Pls go away and stop eating my sheep" }
    else {
        return `Oi! Sheep number ${numberSheep}! You are about to be eaten by a wolf!`
    }
}