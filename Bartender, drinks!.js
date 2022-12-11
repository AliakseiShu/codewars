function getDrinkByProfession(param){
    switch(param.toLowerCase()) {
        case "Jabroni".toLowerCase():
            return "Patron Tequila"
        case "School Counselor".toLowerCase():
            return "Anything with Alcohol"
        case "Programmer".toLowerCase():
            return "Hipster Craft Beer"
        case "Bike Gang Member".toLowerCase():
            return "Moonshine"
        case "Politician".toLowerCase():
            return "Your tax dollars"
        case "Rapper".toLowerCase():
            return "Cristal"
        default: return "Beer";
    }
}